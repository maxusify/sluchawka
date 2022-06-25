import { PrismaClient } from "@prisma/client";
import { hash, verify } from "argon2";
import { User } from "../../prisma/generated/type-graphql";
import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { UserAuthArgs } from "./types/UserAuthArgs";
import { UserResponse } from "./types/UserResponse";

@Resolver(() => User)
export class UserResolver {
  @Mutation(() => UserResponse, {
    nullable: false,
  })
  async register(
    @Ctx("prisma") ctx: PrismaClient,
    @Args() args: UserAuthArgs
  ): Promise<UserResponse> {
    // Check if email already exists
    const isUserExist = await ctx.user.findUnique({
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
      const user = await ctx.user.create({
        data: { email: args.data.email, password: hashedPassword },
      });

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
    @Ctx("prisma") ctx: PrismaClient,
    @Args() args: UserAuthArgs
  ): Promise<UserResponse> {
    // Find user with provided email address
    const user = await ctx.user.findUnique({
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

    // return user
    return { user };
  }
}
