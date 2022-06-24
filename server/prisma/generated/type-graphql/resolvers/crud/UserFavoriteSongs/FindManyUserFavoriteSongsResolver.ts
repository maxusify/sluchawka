import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyUserFavoriteSongsArgs } from "./args/FindManyUserFavoriteSongsArgs";
import { UserFavoriteSongs } from "../../../models/UserFavoriteSongs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoriteSongs)
export class FindManyUserFavoriteSongsResolver {
  @TypeGraphQL.Query(_returns => [UserFavoriteSongs], {
    nullable: false
  })
  async findManyUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserFavoriteSongsArgs): Promise<UserFavoriteSongs[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
