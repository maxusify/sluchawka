import { hash, verify } from "argon2";
import { User } from "../../prisma/generated/type-graphql";
import { Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { UserAuthArgs } from "./types/UserAuthArgs";
import { UserResponse } from "./types/UserResponse";
import { ApolloContext } from "src/types";
import { __COOKIE_NAME__ } from "../../src/constants";

@Resolver(() => User)
export class UserResolver {
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
    // Check if email already exists
    const isUserExist = await prisma.user.findUnique({
      where: {
        email: args.data.email,
      },
    });
    if (isUserExist !== null) {
      return {
        errors: [
          {
            field: "email",
            message: "Provided email address is already in use.",
          },
        ],
      };
    }

    // Check email length before register
    if (args.data.email.length <= 2) {
      return {
        errors: [
          {
            field: "email",
            message: "Length must be greater than 2.",
          },
        ],
      };
    }

    // Check password length before register
    if (args.data.password.length <= 7) {
      return {
        errors: [
          {
            field: "password",
            message: "Password length must contain at least 8 characters.",
          },
        ],
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
