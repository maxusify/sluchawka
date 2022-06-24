import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUserFavoriteSongsArgs } from "./args/GroupByUserFavoriteSongsArgs";
import { UserFavoriteSongs } from "../../../models/UserFavoriteSongs";
import { UserFavoriteSongsGroupBy } from "../../outputs/UserFavoriteSongsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoriteSongs)
export class GroupByUserFavoriteSongsResolver {
  @TypeGraphQL.Query(_returns => [UserFavoriteSongsGroupBy], {
    nullable: false
  })
  async groupByUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserFavoriteSongsArgs): Promise<UserFavoriteSongsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
