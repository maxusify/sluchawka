import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostCreateWithoutAuthorInput } from "../inputs/UserPostCreateWithoutAuthorInput";
import { UserPostWhereUniqueInput } from "../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.InputType("UserPostCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class UserPostCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => UserPostWhereUniqueInput, {
    nullable: false
  })
  where!: UserPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPostCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: UserPostCreateWithoutAuthorInput;
}
