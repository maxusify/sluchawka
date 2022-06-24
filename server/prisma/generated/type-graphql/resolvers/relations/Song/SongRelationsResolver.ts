import * as TypeGraphQL from "type-graphql";
import { Song } from "../../../models/Song";
import { User } from "../../../models/User";
import { UserFavoriteSongs } from "../../../models/UserFavoriteSongs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Song)
export class SongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => UserFavoriteSongs, {
    nullable: true
  })
  async UserFavoriteSongs(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any): Promise<UserFavoriteSongs | null> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).UserFavoriteSongs({});
  }
}
