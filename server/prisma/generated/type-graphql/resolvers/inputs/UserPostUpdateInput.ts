import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileUpdateOneWithoutPostsInput } from "../inputs/UserProfileUpdateOneWithoutPostsInput";
import { UserUpdateOneRequiredWithoutCreatedPostsInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedPostsInput";

@TypeGraphQL.InputType("UserPostUpdateInput", {
  isAbstract: true
})
export class UserPostUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatedPostsInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutCreatedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateOneWithoutPostsInput, {
    nullable: true
  })
  userProfile?: UserProfileUpdateOneWithoutPostsInput | undefined;
}
