import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserFavoritePlaylistsUpdateOneWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsUpdateOneWithoutPlaylistsInput";
import { UserUpdateOneRequiredWithoutCreatedPlaylistsInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedPlaylistsInput";

@TypeGraphQL.InputType("PlaylistUpdateInput", {
  isAbstract: true
})
export class PlaylistUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatedPlaylistsInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutCreatedPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpdateOneWithoutPlaylistsInput, {
    nullable: true
  })
  userFavoritePlaylists?: UserFavoritePlaylistsUpdateOneWithoutPlaylistsInput | undefined;
}
