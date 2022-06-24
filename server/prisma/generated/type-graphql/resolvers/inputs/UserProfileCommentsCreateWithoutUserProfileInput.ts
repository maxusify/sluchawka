import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCreatedCommentsInput } from "../inputs/UserCreateNestedOneWithoutCreatedCommentsInput";

@TypeGraphQL.InputType("UserProfileCommentsCreateWithoutUserProfileInput", {
  isAbstract: true
})
export class UserProfileCommentsCreateWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedCommentsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutCreatedCommentsInput;

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
}
