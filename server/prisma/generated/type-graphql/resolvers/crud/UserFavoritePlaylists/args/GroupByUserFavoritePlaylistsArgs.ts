import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoritePlaylistsOrderByWithAggregationInput } from "../../../inputs/UserFavoritePlaylistsOrderByWithAggregationInput";
import { UserFavoritePlaylistsScalarWhereWithAggregatesInput } from "../../../inputs/UserFavoritePlaylistsScalarWhereWithAggregatesInput";
import { UserFavoritePlaylistsWhereInput } from "../../../inputs/UserFavoritePlaylistsWhereInput";
import { UserFavoritePlaylistsScalarFieldEnum } from "../../../../enums/UserFavoritePlaylistsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserFavoritePlaylistsArgs {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereInput, {
    nullable: true
  })
  where?: UserFavoritePlaylistsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserFavoritePlaylistsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userProfileId">;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserFavoritePlaylistsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
