import * as TypeGraphQL from "type-graphql";
import { Playlist } from "../../../models/Playlist";
import { Song } from "../../../models/Song";
import { User } from "../../../models/User";
import { UserPost } from "../../../models/UserPost";
import { UserProfile } from "../../../models/UserProfile";
import { UserProfileComments } from "../../../models/UserProfileComments";
import { UserCreatedCommentsArgs } from "./args/UserCreatedCommentsArgs";
import { UserCreatedPlaylistsArgs } from "./args/UserCreatedPlaylistsArgs";
import { UserCreatedPostsArgs } from "./args/UserCreatedPostsArgs";
import { UserCreatedSongsArgs } from "./args/UserCreatedSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: true
  })
  async profile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [UserPost], {
    nullable: false
  })
  async createdPosts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedPostsArgs): Promise<UserPost[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdPosts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [UserProfileComments], {
    nullable: false
  })
  async createdComments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedCommentsArgs): Promise<UserProfileComments[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdComments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Playlist], {
    nullable: false
  })
  async createdPlaylists(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedPlaylistsArgs): Promise<Playlist[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdPlaylists(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Song], {
    nullable: false
  })
  async createdSongs(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCreatedSongsArgs): Promise<Song[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).createdSongs(args);
  }
}
