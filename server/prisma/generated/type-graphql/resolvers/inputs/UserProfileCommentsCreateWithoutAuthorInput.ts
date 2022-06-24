import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateNestedOneWithoutCommentsInput } from "../inputs/UserProfileCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType("UserProfileCommentsCreateWithoutAuthorInput", {
  isAbstract: true
})
export class UserProfileCommentsCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  userProfile?: UserProfileCreateNestedOneWithoutCommentsInput | undefined;
}
