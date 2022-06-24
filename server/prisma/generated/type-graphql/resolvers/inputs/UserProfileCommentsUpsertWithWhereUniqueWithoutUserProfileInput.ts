import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsCreateWithoutUserProfileInput } from "../inputs/UserProfileCommentsCreateWithoutUserProfileInput";
import { UserProfileCommentsUpdateWithoutUserProfileInput } from "../inputs/UserProfileCommentsUpdateWithoutUserProfileInput";
import { UserProfileCommentsWhereUniqueInput } from "../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput", {
  isAbstract: true
})
export class UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileCommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsUpdateWithoutUserProfileInput, {
    nullable: false
  })
  update!: UserProfileCommentsUpdateWithoutUserProfileInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserProfileCommentsCreateWithoutUserProfileInput;
}
