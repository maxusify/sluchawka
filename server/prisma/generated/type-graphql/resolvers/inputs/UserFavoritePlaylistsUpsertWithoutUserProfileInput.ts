import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsCreateWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsCreateWithoutUserProfileInput";
import { UserFavoritePlaylistsUpdateWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsUpdateWithoutUserProfileInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsUpsertWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsUpsertWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpdateWithoutUserProfileInput, {
    nullable: false
  })
  update!: UserFavoritePlaylistsUpdateWithoutUserProfileInput;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserFavoritePlaylistsCreateWithoutUserProfileInput;
}
