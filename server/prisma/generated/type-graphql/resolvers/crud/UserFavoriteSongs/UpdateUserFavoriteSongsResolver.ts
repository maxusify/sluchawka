import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateUserFavoriteSongsArgs } from "./args/UpdateUserFavoriteSongsArgs";
import { UserFavoriteSongs } from "../../../models/UserFavoriteSongs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoriteSongs)
export class UpdateUserFavoriteSongsResolver {
  @TypeGraphQL.Mutation(_returns => UserFavoriteSongs, {
    nullable: true
  })
  async updateUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateUserFavoriteSongsArgs): Promise<UserFavoriteSongs | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
