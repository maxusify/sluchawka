import { PrismaClient } from "@prisma/client";
import { PrismaContext } from "src/types";
import { Query, Resolver, Arg, Ctx } from "type-graphql";
import { ContextParamMetadata } from "type-graphql/dist/metadata/definitions";
import { User } from "../../prisma/generated/type-graphql/";

@Resolver()
export class UserResolver {
  @Query(() => User)
  user(@Ctx() ctx: PrismaContext, @Arg("email") email: String) {
    ctx.prisma.user.findFirst({});
  }
}
