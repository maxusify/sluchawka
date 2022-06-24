import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedSongsInput } from "../inputs/UserCreateWithoutCreatedSongsInput";
import { UserUpdateWithoutCreatedSongsInput } from "../inputs/UserUpdateWithoutCreatedSongsInput";

@TypeGraphQL.InputType("UserUpsertWithoutCreatedSongsInput", {
  isAbstract: true
})
export class UserUpsertWithoutCreatedSongsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedSongsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedSongsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedSongsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedSongsInput;
}
