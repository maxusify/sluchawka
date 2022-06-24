import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileUpdateOneRequiredWithoutFavPlaylistsInput } from "../inputs/UserProfileUpdateOneRequiredWithoutFavPlaylistsInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsUpdateWithoutPlaylistsInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsUpdateWithoutPlaylistsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneRequiredWithoutFavPlaylistsInput, {
    nullable: true
  })
  userProfile?: UserProfileUpdateOneRequiredWithoutFavPlaylistsInput | undefined;
}
