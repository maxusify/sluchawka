import * as TypeGraphQL from "type-graphql";
import { Playlist } from "../../../models/Playlist";
import { User } from "../../../models/User";
import { UserFavoritePlaylists } from "../../../models/UserFavoritePlaylists";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Playlist)
export class PlaylistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() playlist: Playlist, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).playlist.findUnique({
      where: {
        id: playlist.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => UserFavoritePlaylists, {
    nullable: true
  })
  async userFavoritePlaylists(@TypeGraphQL.Root() playlist: Playlist, @TypeGraphQL.Ctx() ctx: any): Promise<UserFavoritePlaylists | null> {
    return getPrismaFromContext(ctx).playlist.findUnique({
      where: {
        id: playlist.id,
      },
    }).userFavoritePlaylists({});
  }
}
