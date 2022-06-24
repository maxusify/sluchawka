import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistUpdateManyWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistUpdateManyWithoutUserFavoritePlaylistsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileUpdateOneRequiredWithoutFavPlaylistsInput } from "../inputs/UserProfileUpdateOneRequiredWithoutFavPlaylistsInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsUpdateInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneRequiredWithoutFavPlaylistsInput, {
    nullable: true
  })
  userProfile?: UserProfileUpdateOneRequiredWithoutFavPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistUpdateManyWithoutUserFavoritePlaylistsInput, {
    nullable: true
  })
  playlists?: PlaylistUpdateManyWithoutUserFavoritePlaylistsInput | undefined;
}
