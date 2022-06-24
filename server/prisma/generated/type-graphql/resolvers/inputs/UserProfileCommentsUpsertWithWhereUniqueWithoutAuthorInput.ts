import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsCreateWithoutAuthorInput } from "../inputs/UserProfileCommentsCreateWithoutAuthorInput";
import { UserProfileCommentsUpdateWithoutAuthorInput } from "../inputs/UserProfileCommentsUpdateWithoutAuthorInput";
import { UserProfileCommentsWhereUniqueInput } from "../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCommentsUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class UserProfileCommentsUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileCommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: UserProfileCommentsUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: UserProfileCommentsCreateWithoutAuthorInput;
}
