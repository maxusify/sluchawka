import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PlaylistScalarWhereInput", {
  isAbstract: true
})
export class PlaylistScalarWhereInput {
  @TypeGraphQL.Field(_type => [PlaylistScalarWhereInput], {
    nullable: true
  })
  AND?: PlaylistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereInput], {
    nullable: true
  })
  OR?: PlaylistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereInput], {
    nullable: true
  })
  NOT?: PlaylistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorId?: StringFilter | undefined;

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
  userFavoritePlaylistsId?: StringNullableFilter | undefined;
}
