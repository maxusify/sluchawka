import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserFavoritePlaylistsArgs } from "./args/AggregateUserFavoritePlaylistsArgs";
import { CreateManyUserFavoritePlaylistsArgs } from "./args/CreateManyUserFavoritePlaylistsArgs";
import { CreateUserFavoritePlaylistsArgs } from "./args/CreateUserFavoritePlaylistsArgs";
import { DeleteManyUserFavoritePlaylistsArgs } from "./args/DeleteManyUserFavoritePlaylistsArgs";
import { DeleteUserFavoritePlaylistsArgs } from "./args/DeleteUserFavoritePlaylistsArgs";
import { FindFirstUserFavoritePlaylistsArgs } from "./args/FindFirstUserFavoritePlaylistsArgs";
import { FindManyUserFavoritePlaylistsArgs } from "./args/FindManyUserFavoritePlaylistsArgs";
import { FindUniqueUserFavoritePlaylistsArgs } from "./args/FindUniqueUserFavoritePlaylistsArgs";
import { GroupByUserFavoritePlaylistsArgs } from "./args/GroupByUserFavoritePlaylistsArgs";
import { UpdateManyUserFavoritePlaylistsArgs } from "./args/UpdateManyUserFavoritePlaylistsArgs";
import { UpdateUserFavoritePlaylistsArgs } from "./args/UpdateUserFavoritePlaylistsArgs";
import { UpsertUserFavoritePlaylistsArgs } from "./args/UpsertUserFavoritePlaylistsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UserFavoritePlaylists } from "../../../models/UserFavoritePlaylists";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserFavoritePlaylists } from "../../outputs/AggregateUserFavoritePlaylists";
import { UserFavoritePlaylistsGroupBy } from "../../outputs/UserFavoritePlaylistsGroupBy";

@TypeGraphQL.Resolver(_of => UserFavoritePlaylists)
export class UserFavoritePlaylistsCrudResolver {
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

  @TypeGraphQL.Query(_returns => UserFavoritePlaylists, {
    nullable: true
  })
  async findFirstUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserFavoritePlaylistsArgs): Promise<UserFavoritePlaylists | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserFavoritePlaylists], {
    nullable: false
  })
  async findManyUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserFavoritePlaylistsArgs): Promise<UserFavoritePlaylists[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserFavoritePlaylistsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserFavoritePlaylists, {
    nullable: true
  })
  async deleteUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteUserFavoritePlaylistsArgs): Promise<UserFavoritePlaylists | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserFavoritePlaylists, {
    nullable: true
  })
  async updateUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateUserFavoritePlaylistsArgs): Promise<UserFavoritePlaylists | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserFavoritePlaylistsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserFavoritePlaylistsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => AggregateUserFavoritePlaylists, {
    nullable: false
  })
  async aggregateUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserFavoritePlaylistsArgs): Promise<AggregateUserFavoritePlaylists> {
    return getPrismaFromContext(ctx).userFavoritePlaylists.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserFavoritePlaylistsGroupBy], {
    nullable: false
  })
  async groupByUserFavoritePlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserFavoritePlaylistsArgs): Promise<UserFavoritePlaylistsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoritePlaylists.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
