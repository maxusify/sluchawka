import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoriteSongsOrderByWithAggregationInput } from "../../../inputs/UserFavoriteSongsOrderByWithAggregationInput";
import { UserFavoriteSongsScalarWhereWithAggregatesInput } from "../../../inputs/UserFavoriteSongsScalarWhereWithAggregatesInput";
import { UserFavoriteSongsWhereInput } from "../../../inputs/UserFavoriteSongsWhereInput";
import { UserFavoriteSongsScalarFieldEnum } from "../../../../enums/UserFavoriteSongsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserFavoriteSongsArgs {
  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereInput, {
    nullable: true
  })
  where?: UserFavoriteSongsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserFavoriteSongsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserFavoriteSongsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserFavoriteSongsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userProfileId">;

  @TypeGraphQL.Field(_type => UserFavoriteSongsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserFavoriteSongsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
