import * as TypeGraphQL from "type-graphql";
import { Song } from "../../../models/Song";
import { UserFavoriteSongs } from "../../../models/UserFavoriteSongs";
import { UserProfile } from "../../../models/UserProfile";
import { UserFavoriteSongsSongsArgs } from "./args/UserFavoriteSongsSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoriteSongs)
export class UserFavoriteSongsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: false
  })
  async userProfile(@TypeGraphQL.Root() userFavoriteSongs: UserFavoriteSongs, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile> {
    return getPrismaFromContext(ctx).userFavoriteSongs.findUnique({
      where: {
        id: userFavoriteSongs.id,
      },
    }).userProfile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Song], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() userFavoriteSongs: UserFavoriteSongs, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFavoriteSongsSongsArgs): Promise<Song[]> {
    return getPrismaFromContext(ctx).userFavoriteSongs.findUnique({
      where: {
        id: userFavoriteSongs.id,
      },
    }).songs(args);
  }
}
