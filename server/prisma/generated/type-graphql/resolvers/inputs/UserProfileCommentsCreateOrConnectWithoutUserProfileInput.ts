import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsCreateWithoutUserProfileInput } from "../inputs/UserProfileCommentsCreateWithoutUserProfileInput";
import { UserProfileCommentsWhereUniqueInput } from "../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCommentsCreateOrConnectWithoutUserProfileInput", {
  isAbstract: true
})
export class UserProfileCommentsCreateOrConnectWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileCommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserProfileCommentsCreateWithoutUserProfileInput;
}
