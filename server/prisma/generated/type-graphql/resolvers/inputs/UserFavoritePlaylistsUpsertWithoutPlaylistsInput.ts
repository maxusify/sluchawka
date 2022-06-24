import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsCreateWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsCreateWithoutPlaylistsInput";
import { UserFavoritePlaylistsUpdateWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsUpdateWithoutPlaylistsInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsUpsertWithoutPlaylistsInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsUpsertWithoutPlaylistsInput {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpdateWithoutPlaylistsInput, {
    nullable: false
  })
  update!: UserFavoritePlaylistsUpdateWithoutPlaylistsInput;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateWithoutPlaylistsInput, {
    nullable: false
  })
  create!: UserFavoritePlaylistsCreateWithoutPlaylistsInput;
}
