import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutPostsInput } from "../inputs/UserProfileCreateWithoutPostsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCreateOrConnectWithoutPostsInput", {
  isAbstract: true
})
export class UserProfileCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutPostsInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutPostsInput;
}
