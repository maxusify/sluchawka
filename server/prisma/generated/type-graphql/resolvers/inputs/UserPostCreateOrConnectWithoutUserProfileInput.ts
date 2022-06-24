import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostCreateWithoutUserProfileInput } from "../inputs/UserPostCreateWithoutUserProfileInput";
import { UserPostWhereUniqueInput } from "../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.InputType("UserPostCreateOrConnectWithoutUserProfileInput", {
  isAbstract: true
})
export class UserPostCreateOrConnectWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserPostWhereUniqueInput, {
    nullable: false
  })
  where!: UserPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPostCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserPostCreateWithoutUserProfileInput;
}
