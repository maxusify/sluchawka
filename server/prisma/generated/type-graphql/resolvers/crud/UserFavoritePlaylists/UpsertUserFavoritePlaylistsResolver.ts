import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertUserFavoritePlaylistsArgs } from "./args/UpsertUserFavoritePlaylistsArgs";
import { UserFavoritePlaylists } from "../../../models/UserFavoritePlaylists";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoritePlaylists)
export class UpsertUserFavoritePlaylistsResolver {
  @TypeGraphQL.Mutation(_returns => UserFavoritePlaylists, {
    nullable: false
  })
  async upsertUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertUserFavoritePlaylistsArgs): Promise<UserFavoritePlaylists> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
