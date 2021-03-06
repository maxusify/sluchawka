import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCreatedPostsInput } from "../inputs/UserCreateNestedOneWithoutCreatedPostsInput";

@TypeGraphQL.InputType("UserPostCreateWithoutUserProfileInput", {
  isAbstract: true
})
export class UserPostCreateWithoutUserProfileInput {
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
}
