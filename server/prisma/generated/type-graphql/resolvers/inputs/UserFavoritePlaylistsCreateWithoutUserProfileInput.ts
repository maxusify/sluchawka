import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsCreateWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsCreateWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput, {
    nullable: true
  })
  playlists?: PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput | undefined;
}
