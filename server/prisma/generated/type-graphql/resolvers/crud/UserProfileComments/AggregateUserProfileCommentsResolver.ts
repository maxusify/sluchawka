import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserProfileCommentsArgs } from "./args/AggregateUserProfileCommentsArgs";
import { UserProfileComments } from "../../../models/UserProfileComments";
import { AggregateUserProfileComments } from "../../outputs/AggregateUserProfileComments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfileComments)
export class AggregateUserProfileCommentsResolver {
  @TypeGraphQL.Query(_returns => AggregateUserProfileComments, {
    nullable: false
  })
  async aggregateUserProfileComments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserProfileCommentsArgs): Promise<AggregateUserProfileComments> {
    return getPrismaFromContext(ctx).userProfileComments.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
