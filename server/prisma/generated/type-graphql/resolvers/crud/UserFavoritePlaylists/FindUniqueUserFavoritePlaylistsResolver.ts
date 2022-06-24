import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserFavoritePlaylistsArgs } from "./args/FindUniqueUserFavoritePlaylistsArgs";
import { UserFavoritePlaylists } from "../../../models/UserFavoritePlaylists";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoritePlaylists)
export class FindUniqueUserFavoritePlaylistsResolver {
  @TypeGraphQL.Query(_returns => UserFavoritePlaylists, {
    nullable: true
  })
  async findUniqueUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserFavoritePlaylistsArgs): Promise<UserFavoritePlaylists | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
