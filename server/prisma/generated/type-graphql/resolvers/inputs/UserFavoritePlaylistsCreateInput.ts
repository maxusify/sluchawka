import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput";
import { UserProfileCreateNestedOneWithoutFavPlaylistsInput } from "../inputs/UserProfileCreateNestedOneWithoutFavPlaylistsInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsCreateInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutFavPlaylistsInput, {
    nullable: false
  })
  userProfile!: UserProfileCreateNestedOneWithoutFavPlaylistsInput;

  @TypeGraphQL.Field(_type => PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput, {
    nullable: true
  })
  playlists?: PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput | undefined;
}
