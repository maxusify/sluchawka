import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserFavoriteSongsArgs } from "./args/FindUniqueUserFavoriteSongsArgs";
import { UserFavoriteSongs } from "../../../models/UserFavoriteSongs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoriteSongs)
export class FindUniqueUserFavoriteSongsResolver {
  @TypeGraphQL.Query(_returns => UserFavoriteSongs, {
    nullable: true
  })
  async findUniqueUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserFavoriteSongsArgs): Promise<UserFavoriteSongs | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
