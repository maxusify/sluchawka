import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstUserProfileCommentsArgs } from "./args/FindFirstUserProfileCommentsArgs";
import { UserProfileComments } from "../../../models/UserProfileComments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfileComments)
export class FindFirstUserProfileCommentsResolver {
  @TypeGraphQL.Query(_returns => UserProfileComments, {
    nullable: true
  })
  async findFirstUserProfileComments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserProfileCommentsArgs): Promise<UserProfileComments | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userProfileComments.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
