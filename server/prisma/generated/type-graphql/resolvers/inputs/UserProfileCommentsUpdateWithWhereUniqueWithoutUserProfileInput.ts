import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsUpdateWithoutUserProfileInput } from "../inputs/UserProfileCommentsUpdateWithoutUserProfileInput";
import { UserProfileCommentsWhereUniqueInput } from "../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput", {
  isAbstract: true
})
export class UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileCommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsUpdateWithoutUserProfileInput, {
    nullable: false
  })
  data!: UserProfileCommentsUpdateWithoutUserProfileInput;
}
