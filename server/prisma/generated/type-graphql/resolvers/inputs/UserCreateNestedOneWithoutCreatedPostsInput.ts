import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedPostsInput } from "../inputs/UserCreateOrConnectWithoutCreatedPostsInput";
import { UserCreateWithoutCreatedPostsInput } from "../inputs/UserCreateWithoutCreatedPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCreatedPostsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCreatedPostsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedPostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
