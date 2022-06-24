import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserProfileUpdateOneWithoutCommentsInput } from "../inputs/UserProfileUpdateOneWithoutCommentsInput";
import { UserUpdateOneRequiredWithoutCreatedCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCreatedCommentsInput";

@TypeGraphQL.InputType("UserProfileCommentsUpdateInput", {
  isAbstract: true
})
export class UserProfileCommentsUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatedCommentsInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutCreatedCommentsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserProfileUpdateOneWithoutCommentsInput, {
    nullable: true
  })
  userProfile?: UserProfileUpdateOneWithoutCommentsInput | undefined;
}
