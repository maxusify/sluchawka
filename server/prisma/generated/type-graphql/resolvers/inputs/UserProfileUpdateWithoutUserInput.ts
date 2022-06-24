import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserFavoritePlaylistsUpdateOneWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsUpdateOneWithoutUserProfileInput";
import { UserFavoriteSongsUpdateOneWithoutUserProfileInput } from "../inputs/UserFavoriteSongsUpdateOneWithoutUserProfileInput";
import { UserPostUpdateManyWithoutUserProfileInput } from "../inputs/UserPostUpdateManyWithoutUserProfileInput";
import { UserProfileCommentsUpdateManyWithoutUserProfileInput } from "../inputs/UserProfileCommentsUpdateManyWithoutUserProfileInput";

@TypeGraphQL.InputType("UserProfileUpdateWithoutUserInput", {
  isAbstract: true
})
export class UserProfileUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsUpdateOneWithoutUserProfileInput, {
    nullable: true
  })
  favSongs?: UserFavoriteSongsUpdateOneWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpdateOneWithoutUserProfileInput, {
    nullable: true
  })
  favPlaylists?: UserFavoritePlaylistsUpdateOneWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserPostUpdateManyWithoutUserProfileInput, {
    nullable: true
  })
  posts?: UserPostUpdateManyWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsUpdateManyWithoutUserProfileInput, {
    nullable: true
  })
  comments?: UserProfileCommentsUpdateManyWithoutUserProfileInput | undefined;
}
