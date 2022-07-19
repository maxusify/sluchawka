import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserProfileRelationFilter } from "../inputs/UserProfileRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserProfileCommentsWhereInput", {
  isAbstract: true
})
export class UserProfileCommentsWhereInput {
  @TypeGraphQL.Field(_type => [UserProfileCommentsWhereInput], {
    nullable: true
  })
  AND?: UserProfileCommentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsWhereInput], {
    nullable: true
  })
  OR?: UserProfileCommentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsWhereInput], {
    nullable: true
  })
  NOT?: UserProfileCommentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  userProfileId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserProfileRelationFilter, {
    nullable: true
  })
  userProfile?: UserProfileRelationFilter | undefined;
}
