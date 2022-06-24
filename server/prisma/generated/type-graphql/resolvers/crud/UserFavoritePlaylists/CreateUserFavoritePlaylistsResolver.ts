import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateUserFavoritePlaylistsArgs } from "./args/CreateUserFavoritePlaylistsArgs";
import { UserFavoritePlaylists } from "../../../models/UserFavoritePlaylists";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoritePlaylists)
export class CreateUserFavoritePlaylistsResolver {
  @TypeGraphQL.Mutation(_returns => UserFavoritePlaylists, {
    nullable: false
  })
  async createUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateUserFavoritePlaylistsArgs): Promise<UserFavoritePlaylists> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
