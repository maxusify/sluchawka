import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserFavoriteSongsUpdateOneWithoutSongsInput } from "../inputs/UserFavoriteSongsUpdateOneWithoutSongsInput";
import { UserUpdateOneRequiredWithoutCreatedSongsInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedSongsInput";

@TypeGraphQL.InputType("SongUpdateInput", {
  isAbstract: true
})
export class SongUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatedSongsInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutCreatedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsUpdateOneWithoutSongsInput, {
    nullable: true
  })
  UserFavoriteSongs?: UserFavoriteSongsUpdateOneWithoutSongsInput | undefined;
}
