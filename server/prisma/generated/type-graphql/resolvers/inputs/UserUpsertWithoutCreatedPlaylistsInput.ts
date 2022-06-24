import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedPlaylistsInput } from "../inputs/UserCreateWithoutCreatedPlaylistsInput";
import { UserUpdateWithoutCreatedPlaylistsInput } from "../inputs/UserUpdateWithoutCreatedPlaylistsInput";

@TypeGraphQL.InputType("UserUpsertWithoutCreatedPlaylistsInput", {
  isAbstract: true
})
export class UserUpsertWithoutCreatedPlaylistsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedPlaylistsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatedPlaylistsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedPlaylistsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedPlaylistsInput;
}
