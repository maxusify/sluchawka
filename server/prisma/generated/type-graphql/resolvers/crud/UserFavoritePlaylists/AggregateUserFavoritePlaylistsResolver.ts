import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserFavoritePlaylistsArgs } from "./args/AggregateUserFavoritePlaylistsArgs";
import { UserFavoritePlaylists } from "../../../models/UserFavoritePlaylists";
import { AggregateUserFavoritePlaylists } from "../../outputs/AggregateUserFavoritePlaylists";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoritePlaylists)
export class AggregateUserFavoritePlaylistsResolver {
  @TypeGraphQL.Query(_returns => AggregateUserFavoritePlaylists, {
    nullable: false
  })
  async aggregateUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserFavoritePlaylistsArgs): Promise<AggregateUserFavoritePlaylists> {
    return getPrismaFromContext(ctx).userFavoritePlaylists.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
