import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsCountAggregate } from "../outputs/UserFavoritePlaylistsCountAggregate";
import { UserFavoritePlaylistsMaxAggregate } from "../outputs/UserFavoritePlaylistsMaxAggregate";
import { UserFavoritePlaylistsMinAggregate } from "../outputs/UserFavoritePlaylistsMinAggregate";

@TypeGraphQL.ObjectType("UserFavoritePlaylistsGroupBy", {
  isAbstract: true
})
export class UserFavoritePlaylistsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userProfileId!: string;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCountAggregate, {
    nullable: true
  })
  _count!: UserFavoritePlaylistsCountAggregate | null;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsMinAggregate, {
    nullable: true
  })
  _min!: UserFavoritePlaylistsMinAggregate | null;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsMaxAggregate, {
    nullable: true
  })
  _max!: UserFavoritePlaylistsMaxAggregate | null;
}
