import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutCommentsInput } from "../inputs/UserProfileCreateWithoutCommentsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class UserProfileCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutCommentsInput;
}
