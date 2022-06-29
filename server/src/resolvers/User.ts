import { hash, verify } from "argon2";
import { ApolloContext } from "src/types";
import { Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { v4 } from "uuid";

import { User } from "../../prisma/generated/type-graphql";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../../src/constants";
import { sendEmail } from "../utils/sendEmail";
import { validateRegister } from "../utils/validateRegister";
import { UserAuthArgs } from "./types/UserAuthArgs";
import { UserForgotPasswordArgs } from "./types/UserForgotPasswordArgs";
import { UserRecoverPasswordArgs } from "./types/UserRecoverPasswordArgs";
import { UserResponse } from "./types/UserResponse";

/**
 * UserResolver
 * Manages operations related with users
 */
@Resolver(() => User)
export class UserResolver {
  /**
   * Change password of the user
   * @param ctx - Provided context by the client
   * @param args - Provided data by the endpoint
   * @returns UserResponse of user or errors
   */
  @Mutation(() => UserResponse)
  async changePassword(
    @Ctx() { redis, prisma, req }: ApolloContext,
    @Args() args: UserRecoverPasswordArgs
  ): Promise<UserResponse> {
    if (args.data.newPassword.length <= 7) {
      // Check password length before changing it
      return {
        errors: [
          {
            field: "newPassword",
            message: "New password length must contain at least 8 characters.",
          },
        ],
      };
    }

    // Prefix + token is equal to key in redis
    const token = FORGET_PASSWORD_PREFIX + args.data.token;

    // Get user id from the token
    const userId = await redis.get(token);
    if (!userId) {
      return {
        errors: [
          {
            field: "token",
            message: "Token expired.",
          },
        ],
      };
    }

    // Find user by value of the token
    const doesUserExist = await prisma.user.findUnique({
      where: { id: userId },
    });

    // If user does not exist
    if (!doesUserExist) {
      return {
        errors: [
          {
            field: "token",
            message: "User no longer exists.",
          },
        ],
      };
    }
    // Hash new password
    const newHashedPassword = await hash(args.data.newPassword);

    // Do update user's password
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        password: newHashedPassword,
      },
    });

    // If update failed
    if (!user) {
      return {
        errors: [
          {
            field: "token",
            message: "Failed updating user.",
          },
        ],
      };
    }

    // Remove token from redis
    await redis.del(token);

    // Login user after changing password
    req.session.userId = user.id;

    // Return user
    return { user };
  }

  /**
   * Sends an email with a password recovery token to the user
   * @param ctx - Provided context by the client
   * @param args - Provided data from the endpoint
   * @returns true
   */
  @Mutation(() => Boolean)
  async forgotPassword(
    @Ctx() { prisma, req, redis }: ApolloContext,
    @Args() args: UserForgotPasswordArgs
  ) {
    // Find user with provided email
    const user = await prisma.user.findUnique({
      where: { email: args.data.email },
    });

    // If user does not exist, return true
    // Because of security concerns we don't want to tell the user
    // that account does not exist
    if (!user) {
      return true;
    }

    // Generate a uuid token
    const token = v4();

    // Set new pair in redis
    // key = prefix + token
    redis.set(
      FORGET_PASSWORD_PREFIX + token,
      user.id,
      "EX",
      1000 * 60 * 60 * 24 * 3 // expires after 3 days
    );

    // Send an email to the user with recovery link
    await sendEmail({
      to: args.data.email,
      text: `<a href='http://localhost:3000/forgot-password/${token}'>Reset Password</a>`,
    });

    return true;
  }

  /**
   * Return info to user about themselves
   * @param ctx - Provided context by the client
   * @param args - Provided data from the endpoint
   * @returns promise of user or null
   */
  @Query(() => User, { nullable: true })
  async me(@Ctx() { prisma, req }: ApolloContext): Promise<User | null> {
    // If session is not set, return null
    if (!req.session.userId) return null;

    // Find user with provided id from the session
    const user = await prisma.user.findUnique({
      where: { id: req.session.userId },
    });

    // return user object
    return user;
  }
  /**
   * Register new user to the database
   * @param ctx - Provided context by the client
   * @param args - Provided data from the endpoint
   * @returns promise of user or errors
   */
  @Mutation(() => UserResponse, {
    nullable: false,
  })
  async register(
    @Ctx() { prisma, req }: ApolloContext,
    @Args() args: UserAuthArgs
  ): Promise<UserResponse> {
    // Check if user already exists in database
    const doesUserExist = await prisma.user.findUnique({
      where: {
        email: args.data.email,
      },
    });

    // Validate user input
    const errors = validateRegister(doesUserExist, args);
    if (errors) {
      return {
        errors,
      };
    }

    // Hashing password with argon2
    const hashedPassword = await hash(args.data.password);

    try {
      // Call prisma to create new user
      const user = await prisma.user.create({
        data: { email: args.data.email, password: hashedPassword },
      });

      // Log in user after registering
      req.session.userId = user.id;

      // return user object
      return { user };
    } catch (error) {
      console.error(error);
      return {
        errors: [
          {
            field: "null",
            message: "Internal server error.",
          },
        ],
      };
    }
  }

  /**
   * Create session for the user
   * @param ctx - Provided context by the client
   * @param args - Provided data from the endpoint
   * @returns promise of user or errors
   */
  @Mutation(() => UserResponse, {
    nullable: false,
  })
  async login(
    @Ctx() { prisma, req }: ApolloContext,
    @Args() args: UserAuthArgs
  ): Promise<UserResponse> {
    // Find user with provided email address
    const user = await prisma.user.findUnique({
      where: {
        email: args.data.email,
      },
    });

    // If user does not exist return an error
    if (!user) {
      return {
        errors: [
          {
            field: "email",
            message:
              "Provided email address does not match with any existing user.",
          },
        ],
      };
    }

    // Verify provided password
    const valid = await verify(user.password, args.data.password);

    // If it is not valid, return an error
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "Provided password is incorrect.",
          },
        ],
      };
    }

    // Log in user
    req.session.userId = user.id;

    // return user
    return { user };
  }

  /**
   * Return info to user about themselves
   * @param ctx - Provided context by the client
   * @returns true if successful, false otherwise
   */
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: ApolloContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.error(err);
          resolve(false);
          return;
        } else {
          resolve(true);
        }
      })
    );
  }
}
