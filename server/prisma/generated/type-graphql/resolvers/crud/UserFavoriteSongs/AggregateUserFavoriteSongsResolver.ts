import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserFavoriteSongsArgs } from "./args/AggregateUserFavoriteSongsArgs";
import { UserFavoriteSongs } from "../../../models/UserFavoriteSongs";
import { AggregateUserFavoriteSongs } from "../../outputs/AggregateUserFavoriteSongs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserFavoriteSongs)
export class AggregateUserFavoriteSongsResolver {
  @TypeGraphQL.Query(_returns => AggregateUserFavoriteSongs, {
    nullable: false
  })
  async aggregateUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserFavoriteSongsArgs): Promise<AggregateUserFavoriteSongs> {
    return getPrismaFromContext(ctx).userFavoriteSongs.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
