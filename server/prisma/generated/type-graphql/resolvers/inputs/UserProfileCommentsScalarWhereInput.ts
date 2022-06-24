import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UserProfileCommentsScalarWhereInput", {
  isAbstract: true
})
export class UserProfileCommentsScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserProfileCommentsScalarWhereInput], {
    nullable: true
  })
  AND?: UserProfileCommentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsScalarWhereInput], {
    nullable: true
  })
  OR?: UserProfileCommentsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsScalarWhereInput], {
    nullable: true
  })
  NOT?: UserProfileCommentsScalarWhereInput[] | undefined;

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
}
