import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongUpdateManyWithoutUserFavoriteSongsInput } from "../inputs/SongUpdateManyWithoutUserFavoriteSongsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileUpdateOneRequiredWithoutFavSongsInput } from "../inputs/UserProfileUpdateOneRequiredWithoutFavSongsInput";

@TypeGraphQL.InputType("UserFavoriteSongsUpdateInput", {
  isAbstract: true
})
export class UserFavoriteSongsUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneRequiredWithoutFavSongsInput, {
    nullable: true
  })
  userProfile?: UserProfileUpdateOneRequiredWithoutFavSongsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateManyWithoutUserFavoriteSongsInput, {
    nullable: true
  })
  songs?: SongUpdateManyWithoutUserFavoriteSongsInput | undefined;
}
