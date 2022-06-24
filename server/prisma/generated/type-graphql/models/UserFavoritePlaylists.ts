import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Playlist } from "../models/Playlist";
import { UserProfile } from "../models/UserProfile";
import { UserFavoritePlaylistsCount } from "../resolvers/outputs/UserFavoritePlaylistsCount";

@TypeGraphQL.ObjectType("UserFavoritePlaylists", {
  isAbstract: true
})
export class UserFavoritePlaylists {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  userProfile?: UserProfile;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userProfileId!: string;

  playlists?: Playlist[];

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCount, {
    nullable: true
  })
  _count?: UserFavoritePlaylistsCount | null;
}
