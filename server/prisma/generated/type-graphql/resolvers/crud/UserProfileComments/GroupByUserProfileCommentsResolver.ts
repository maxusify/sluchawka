import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUserProfileCommentsArgs } from "./args/GroupByUserProfileCommentsArgs";
import { UserProfileComments } from "../../../models/UserProfileComments";
import { UserProfileCommentsGroupBy } from "../../outputs/UserProfileCommentsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfileComments)
export class GroupByUserProfileCommentsResolver {
  @TypeGraphQL.Query(_returns => [UserProfileCommentsGroupBy], {
    nullable: false
  })
  async groupByUserProfileComments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserProfileCommentsArgs): Promise<UserProfileCommentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userProfileComments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
