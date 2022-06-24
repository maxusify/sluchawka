import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PlaylistScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PlaylistScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PlaylistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PlaylistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PlaylistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PlaylistScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  authorId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  userFavoritePlaylistsId?: StringNullableWithAggregatesFilter | undefined;
}
