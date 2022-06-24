import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsCountOrderByAggregateInput } from "../inputs/UserFavoriteSongsCountOrderByAggregateInput";
import { UserFavoriteSongsMaxOrderByAggregateInput } from "../inputs/UserFavoriteSongsMaxOrderByAggregateInput";
import { UserFavoriteSongsMinOrderByAggregateInput } from "../inputs/UserFavoriteSongsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserFavoriteSongsOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserFavoriteSongsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userProfileId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserFavoriteSongsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserFavoriteSongsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserFavoriteSongsMinOrderByAggregateInput | undefined;
}
