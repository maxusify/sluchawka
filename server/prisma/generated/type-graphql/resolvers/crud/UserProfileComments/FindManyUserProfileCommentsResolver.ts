import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyUserProfileCommentsArgs } from "./args/FindManyUserProfileCommentsArgs";
import { UserProfileComments } from "../../../models/UserProfileComments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfileComments)
export class FindManyUserProfileCommentsResolver {
  @TypeGraphQL.Query(_returns => [UserProfileComments], {
    nullable: false
  })
  async findManyUserProfileComments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserProfileCommentsArgs): Promise<UserProfileComments[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userProfileComments.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
