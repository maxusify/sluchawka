import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCreatedCommentsInput } from "../inputs/UserCreateNestedOneWithoutCreatedCommentsInput";
import { UserProfileCreateNestedOneWithoutCommentsInput } from "../inputs/UserProfileCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType("UserProfileCommentsCreateInput", {
  isAbstract: true
})
export class UserProfileCommentsCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedCommentsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutCreatedCommentsInput;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  userProfile?: UserProfileCreateNestedOneWithoutCommentsInput | undefined;
}
