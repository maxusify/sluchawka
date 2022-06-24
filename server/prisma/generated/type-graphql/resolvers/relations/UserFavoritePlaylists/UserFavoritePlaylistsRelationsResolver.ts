import * as TypeGraphQL from "type-graphql";
import { Playlist } from "../../../models/Playlist";
import { UserFavoritePlaylists } from "../../../models/UserFavoritePlaylists";
import { UserProfile } from "../../../models/UserProfile";
import { UserFavoritePlaylistsPlaylistsArgs } from "./args/UserFavoritePlaylistsPlaylistsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoritePlaylists)
export class UserFavoritePlaylistsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: false
  })
  async userProfile(@TypeGraphQL.Root() userFavoritePlaylists: UserFavoritePlaylists, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile> {
    return getPrismaFromContext(ctx).userFavoritePlaylists.findUnique({
      where: {
        id: userFavoritePlaylists.id,
      },
    }).userProfile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Playlist], {
    nullable: false
  })
  async playlists(@TypeGraphQL.Root() userFavoritePlaylists: UserFavoritePlaylists, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFavoritePlaylistsPlaylistsArgs): Promise<Playlist[]> {
    return getPrismaFromContext(ctx).userFavoritePlaylists.findUnique({
      where: {
        id: userFavoritePlaylists.id,
      },
    }).playlists(args);
  }
}
