import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UserPostScalarWhereInput", {
  isAbstract: true
})
export class UserPostScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserPostScalarWhereInput], {
    nullable: true
  })
  AND?: UserPostScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostScalarWhereInput], {
    nullable: true
  })
  OR?: UserPostScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostScalarWhereInput], {
    nullable: true
  })
  NOT?: UserPostScalarWhereInput[] | undefined;

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
  title?: StringFilter | undefined;

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
