import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCountOrderByAggregateInput } from "../inputs/PlaylistCountOrderByAggregateInput";
import { PlaylistMaxOrderByAggregateInput } from "../inputs/PlaylistMaxOrderByAggregateInput";
import { PlaylistMinOrderByAggregateInput } from "../inputs/PlaylistMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PlaylistOrderByWithAggregationInput", {
  isAbstract: true
})
export class PlaylistOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userFavoritePlaylistsId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlaylistCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PlaylistCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PlaylistMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PlaylistMinOrderByAggregateInput | undefined;
}
