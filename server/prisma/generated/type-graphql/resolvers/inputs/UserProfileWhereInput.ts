import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { UserFavoritePlaylistsRelationFilter } from "../inputs/UserFavoritePlaylistsRelationFilter";
import { UserFavoriteSongsRelationFilter } from "../inputs/UserFavoriteSongsRelationFilter";
import { UserPostListRelationFilter } from "../inputs/UserPostListRelationFilter";
import { UserProfileCommentsListRelationFilter } from "../inputs/UserProfileCommentsListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserProfileWhereInput", {
  isAbstract: true
})
export class UserProfileWhereInput {
  @TypeGraphQL.Field(_type => [UserProfileWhereInput], {
    nullable: true
  })
  AND?: UserProfileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereInput], {
    nullable: true
  })
  OR?: UserProfileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereInput], {
    nullable: true
  })
  NOT?: UserProfileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsRelationFilter, {
    nullable: true
  })
  favSongs?: UserFavoriteSongsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsRelationFilter, {
    nullable: true
  })
  favPlaylists?: UserFavoritePlaylistsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserPostListRelationFilter, {
    nullable: true
  })
  posts?: UserPostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsListRelationFilter, {
    nullable: true
  })
  comments?: UserProfileCommentsListRelationFilter | undefined;
}
