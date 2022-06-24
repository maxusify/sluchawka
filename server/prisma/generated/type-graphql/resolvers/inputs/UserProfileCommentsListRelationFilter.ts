import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsWhereInput } from "../inputs/UserProfileCommentsWhereInput";

@TypeGraphQL.InputType("UserProfileCommentsListRelationFilter", {
  isAbstract: true
})
export class UserProfileCommentsListRelationFilter {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereInput, {
    nullable: true
  })
  every?: UserProfileCommentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsWhereInput, {
    nullable: true
  })
  some?: UserProfileCommentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsWhereInput, {
    nullable: true
  })
  none?: UserProfileCommentsWhereInput | undefined;
}
