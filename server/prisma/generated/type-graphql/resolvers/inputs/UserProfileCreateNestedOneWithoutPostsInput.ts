import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutPostsInput } from "../inputs/UserProfileCreateOrConnectWithoutPostsInput";
import { UserProfileCreateWithoutPostsInput } from "../inputs/UserProfileCreateWithoutPostsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCreateNestedOneWithoutPostsInput", {
  isAbstract: true
})
export class UserProfileCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutPostsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;
}
