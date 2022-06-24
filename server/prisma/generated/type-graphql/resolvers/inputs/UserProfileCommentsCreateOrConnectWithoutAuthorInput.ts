import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsCreateWithoutAuthorInput } from "../inputs/UserProfileCommentsCreateWithoutAuthorInput";
import { UserProfileCommentsWhereUniqueInput } from "../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCommentsCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class UserProfileCommentsCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileCommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: UserProfileCommentsCreateWithoutAuthorInput;
}
