import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongUpdateManyWithoutUserFavoriteSongsInput } from "../inputs/SongUpdateManyWithoutUserFavoriteSongsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserFavoriteSongsUpdateWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoriteSongsUpdateWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateManyWithoutUserFavoriteSongsInput, {
    nullable: true
  })
  songs?: SongUpdateManyWithoutUserFavoriteSongsInput | undefined;
}
