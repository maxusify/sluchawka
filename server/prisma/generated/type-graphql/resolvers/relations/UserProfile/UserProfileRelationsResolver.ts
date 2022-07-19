import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserFavoritePlaylists } from "../../../models/UserFavoritePlaylists";
import { UserFavoriteSongs } from "../../../models/UserFavoriteSongs";
import { UserPost } from "../../../models/UserPost";
import { UserProfile } from "../../../models/UserProfile";
import { UserProfileComments } from "../../../models/UserProfileComments";
import { UserProfileCommentsArgs } from "./args/UserProfileCommentsArgs";
import { UserProfilePostsArgs } from "./args/UserProfilePostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class UserProfileRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => UserFavoritePlaylists, {
    nullable: true
  })
  async favPlaylists(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any): Promise<UserFavoritePlaylists | null> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).favPlaylists({});
  }

  @TypeGraphQL.FieldResolver(_type => UserFavoriteSongs, {
    nullable: true
  })
  async favSongs(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any): Promise<UserFavoriteSongs | null> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).favSongs({});
  }

  @TypeGraphQL.FieldResolver(_type => [UserPost], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProfilePostsArgs): Promise<UserPost[]> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [UserProfileComments], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProfileCommentsArgs): Promise<UserProfileComments[]> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).comments(args);
  }
}
