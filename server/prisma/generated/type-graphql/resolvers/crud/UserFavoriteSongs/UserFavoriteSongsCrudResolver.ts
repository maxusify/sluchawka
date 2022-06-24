import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserFavoriteSongsArgs } from "./args/AggregateUserFavoriteSongsArgs";
import { CreateManyUserFavoriteSongsArgs } from "./args/CreateManyUserFavoriteSongsArgs";
import { CreateUserFavoriteSongsArgs } from "./args/CreateUserFavoriteSongsArgs";
import { DeleteManyUserFavoriteSongsArgs } from "./args/DeleteManyUserFavoriteSongsArgs";
import { DeleteUserFavoriteSongsArgs } from "./args/DeleteUserFavoriteSongsArgs";
import { FindFirstUserFavoriteSongsArgs } from "./args/FindFirstUserFavoriteSongsArgs";
import { FindManyUserFavoriteSongsArgs } from "./args/FindManyUserFavoriteSongsArgs";
import { FindUniqueUserFavoriteSongsArgs } from "./args/FindUniqueUserFavoriteSongsArgs";
import { GroupByUserFavoriteSongsArgs } from "./args/GroupByUserFavoriteSongsArgs";
import { UpdateManyUserFavoriteSongsArgs } from "./args/UpdateManyUserFavoriteSongsArgs";
import { UpdateUserFavoriteSongsArgs } from "./args/UpdateUserFavoriteSongsArgs";
import { UpsertUserFavoriteSongsArgs } from "./args/UpsertUserFavoriteSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UserFavoriteSongs } from "../../../models/UserFavoriteSongs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserFavoriteSongs } from "../../outputs/AggregateUserFavoriteSongs";
import { UserFavoriteSongsGroupBy } from "../../outputs/UserFavoriteSongsGroupBy";

@TypeGraphQL.Resolver(_of => UserFavoriteSongs)
export class UserFavoriteSongsCrudResolver {
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

  @TypeGraphQL.Query(_returns => UserFavoriteSongs, {
    nullable: true
  })
  async findFirstUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserFavoriteSongsArgs): Promise<UserFavoriteSongs | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => UserFavoriteSongs, {
    nullable: false
  })
  async createUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateUserFavoriteSongsArgs): Promise<UserFavoriteSongs> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserFavoriteSongsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserFavoriteSongs, {
    nullable: true
  })
  async deleteUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteUserFavoriteSongsArgs): Promise<UserFavoriteSongs | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserFavoriteSongsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserFavoriteSongsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserFavoriteSongs, {
    nullable: false
  })
  async upsertUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertUserFavoriteSongsArgs): Promise<UserFavoriteSongs> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateUserFavoriteSongs, {
    nullable: false
  })
  async aggregateUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserFavoriteSongsArgs): Promise<AggregateUserFavoriteSongs> {
    return getPrismaFromContext(ctx).userFavoriteSongs.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserFavoriteSongsGroupBy], {
    nullable: false
  })
  async groupByUserFavoriteSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserFavoriteSongsArgs): Promise<UserFavoriteSongsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userFavoriteSongs.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
