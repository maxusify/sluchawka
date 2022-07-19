import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistListRelationFilter } from "../inputs/PlaylistListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserProfileRelationFilter } from "../inputs/UserProfileRelationFilter";

@TypeGraphQL.InputType("UserFavoritePlaylistsWhereInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsWhereInput {
  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsWhereInput], {
    nullable: true
  })
  AND?: UserFavoritePlaylistsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsWhereInput], {
    nullable: true
  })
  OR?: UserFavoritePlaylistsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsWhereInput], {
    nullable: true
  })
  NOT?: UserFavoritePlaylistsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userProfileId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserProfileRelationFilter, {
    nullable: true
  })
  userProfile?: UserProfileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PlaylistListRelationFilter, {
    nullable: true
  })
  playlists?: PlaylistListRelationFilter | undefined;
}
