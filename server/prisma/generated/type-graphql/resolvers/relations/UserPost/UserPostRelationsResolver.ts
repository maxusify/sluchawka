import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserPost } from "../../../models/UserPost";
import { UserProfile } from "../../../models/UserProfile";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserPost)
export class UserPostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() userPost: UserPost, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).userPost.findUnique({
      where: {
        id: userPost.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: true
  })
  async userProfile(@TypeGraphQL.Root() userPost: UserPost, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).userPost.findUnique({
      where: {
        id: userPost.id,
      },
    }).userProfile({});
  }
}
