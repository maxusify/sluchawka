import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserPostArgs } from "./args/AggregateUserPostArgs";
import { UserPost } from "../../../models/UserPost";
import { AggregateUserPost } from "../../outputs/AggregateUserPost";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserPost)
export class AggregateUserPostResolver {
  @TypeGraphQL.Query(_returns => AggregateUserPost, {
    nullable: false
  })
  async aggregateUserPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserPostArgs): Promise<AggregateUserPost> {
    return getPrismaFromContext(ctx).userPost.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
