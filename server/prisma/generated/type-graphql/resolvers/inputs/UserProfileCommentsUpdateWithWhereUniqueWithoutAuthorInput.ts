import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsUpdateWithoutAuthorInput } from "../inputs/UserProfileCommentsUpdateWithoutAuthorInput";
import { UserProfileCommentsWhereUniqueInput } from "../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCommentsUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class UserProfileCommentsUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileCommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: UserProfileCommentsUpdateWithoutAuthorInput;
}
