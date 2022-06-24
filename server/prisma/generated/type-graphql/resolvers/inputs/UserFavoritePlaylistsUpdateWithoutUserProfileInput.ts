import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistUpdateManyWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistUpdateManyWithoutUserFavoritePlaylistsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsUpdateWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsUpdateWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistUpdateManyWithoutUserFavoritePlaylistsInput, {
    nullable: true
  })
  playlists?: PlaylistUpdateManyWithoutUserFavoritePlaylistsInput | undefined;
}
