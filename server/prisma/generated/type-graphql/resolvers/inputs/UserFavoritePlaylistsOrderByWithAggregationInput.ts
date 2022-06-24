import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsCountOrderByAggregateInput } from "../inputs/UserFavoritePlaylistsCountOrderByAggregateInput";
import { UserFavoritePlaylistsMaxOrderByAggregateInput } from "../inputs/UserFavoritePlaylistsMaxOrderByAggregateInput";
import { UserFavoritePlaylistsMinOrderByAggregateInput } from "../inputs/UserFavoritePlaylistsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserFavoritePlaylistsOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userProfileId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserFavoritePlaylistsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserFavoritePlaylistsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserFavoritePlaylistsMinOrderByAggregateInput | undefined;
}
