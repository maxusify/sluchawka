import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedPostsInput } from "../inputs/UserCreateWithoutCreatedPostsInput";
import { UserUpdateWithoutCreatedPostsInput } from "../inputs/UserUpdateWithoutCreatedPostsInput";

@TypeGraphQL.InputType("UserUpsertWithoutCreatedPostsInput", {
  isAbstract: true
})
export class UserUpsertWithoutCreatedPostsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedPostsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedPostsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedPostsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedPostsInput;
}
