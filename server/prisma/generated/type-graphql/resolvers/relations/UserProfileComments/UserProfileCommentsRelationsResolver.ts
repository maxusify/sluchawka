import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserProfileComments } from "../../../models/UserProfileComments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfileComments)
export class UserProfileCommentsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() userProfileComments: UserProfileComments, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).userProfileComments.findUnique({
      where: {
        id: userProfileComments.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: true
  })
  async userProfile(@TypeGraphQL.Root() userProfileComments: UserProfileComments, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile | null> {
    return getPrismaFromContext(ctx).userProfileComments.findUnique({
      where: {
        id: userProfileComments.id,
      },
    }).userProfile({});
  }
}
