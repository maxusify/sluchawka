import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumUserRoleFieldUpdateOperationsInput } from "../inputs/EnumUserRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PlaylistUpdateManyWithoutAuthorInput } from "../inputs/PlaylistUpdateManyWithoutAuthorInput";
import { SongUpdateManyWithoutAuthorInput } from "../inputs/SongUpdateManyWithoutAuthorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileCommentsUpdateManyWithoutAuthorInput } from "../inputs/UserProfileCommentsUpdateManyWithoutAuthorInput";
import { UserProfileUpdateOneWithoutUserInput } from "../inputs/UserProfileUpdateOneWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateWithoutCreatedPostsInput", {
  isAbstract: true
})
export class UserUpdateWithoutCreatedPostsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  emailVerified?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumUserRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumUserRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneWithoutUserInput, {
    nullable: true
  })
  profile?: UserProfileUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  createdComments?: UserProfileCommentsUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  createdPlaylists?: PlaylistUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  createdSongs?: SongUpdateManyWithoutAuthorInput | undefined;
}
