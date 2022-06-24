import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserFavoritePlaylistsRelationFilter } from "../inputs/UserFavoritePlaylistsRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PlaylistWhereInput", {
  isAbstract: true
})
export class PlaylistWhereInput {
  @TypeGraphQL.Field(_type => [PlaylistWhereInput], {
    nullable: true
  })
  AND?: PlaylistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereInput], {
    nullable: true
  })
  OR?: PlaylistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereInput], {
    nullable: true
  })
  NOT?: PlaylistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

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

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsRelationFilter, {
    nullable: true
  })
  userFavoritePlaylists?: UserFavoritePlaylistsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  userFavoritePlaylistsId?: StringNullableFilter | undefined;
}
