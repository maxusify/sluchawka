import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCreatedPostsInput } from "../inputs/UserCreateNestedOneWithoutCreatedPostsInput";
import { UserProfileCreateNestedOneWithoutPostsInput } from "../inputs/UserProfileCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType("UserPostCreateInput", {
  isAbstract: true
})
export class UserPostCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedPostsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutCreatedPostsInput;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutPostsInput, {
    nullable: true
  })
  userProfile?: UserProfileCreateNestedOneWithoutPostsInput | undefined;
}
