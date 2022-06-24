import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostAvgOrderByAggregateInput } from "../inputs/UserPostAvgOrderByAggregateInput";
import { UserPostCountOrderByAggregateInput } from "../inputs/UserPostCountOrderByAggregateInput";
import { UserPostMaxOrderByAggregateInput } from "../inputs/UserPostMaxOrderByAggregateInput";
import { UserPostMinOrderByAggregateInput } from "../inputs/UserPostMinOrderByAggregateInput";
import { UserPostSumOrderByAggregateInput } from "../inputs/UserPostSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserPostOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserPostOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

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
  userProfileId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserPostCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserPostCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserPostAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserPostAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserPostMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserPostMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserPostMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserPostMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserPostSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserPostSumOrderByAggregateInput | undefined;
}
