import { hash, verify } from "argon2";
import { User } from "../../prisma/generated/type-graphql";
import { Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { UserAuthArgs } from "./types/UserAuthArgs";
import { UserResponse } from "./types/UserResponse";
import { ApolloContext } from "src/types";
import {
  __COOKIE_NAME__,
  __FORGET_PASSWORD_PREFIX__,
} from "../../src/constants";
import { UserForgotPasswordArgs } from "./types/UserForgotPasswordArgs";
import { validateRegister } from "../utils/validateRegister";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";

@Resolver(() => User)
export class UserResolver {
  @Mutation(() => Boolean)
  async forgotPassword(
    @Ctx() { prisma, req, redis }: ApolloContext,
    @Args() args: UserForgotPasswordArgs
  ) {
    const user = await prisma.user.findUnique({
      where: { email: args.data.email },
    });

    if (!user) {
      return true;
    }

    const token = v4();
    redis.set(
      __FORGET_PASSWORD_PREFIX__ + token,
      user.id,
      "EX",
      1000 * 60 * 60 * 24 * 3 // 3 days
    );

    await sendEmail({
      to: args.data.email,
      text: `<a href='http://localhost:3000/forgot-password/${token}'>Reset Password</a>`,
    });

    return true;
  }

  // Returns object representing user
  @Query(() => User, { nullable: true })
  async me(@Ctx() { prisma, req }: ApolloContext) {
    if (!req.session.userId) return null;

    const user = await prisma.user.findUnique({
      where: { id: req.session.userId },
    });
    return user;
  }

  // Register
  @Mutation(() => UserResponse, {
    nullable: false,
  })
  async register(
    @Ctx() { prisma, req }: ApolloContext,
    @Args() args: UserAuthArgs
  ): Promise<UserResponse> {
    // Validate provided data
    const doesUserExist = await prisma.user.findUnique({
      where: {
        email: args.data.email,
      },
    });
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

      req.session.userId = user.id;

      // return user
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

    req.session.userId = user.id;

    // return user
    return { user };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: ApolloContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(__COOKIE_NAME__);
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
