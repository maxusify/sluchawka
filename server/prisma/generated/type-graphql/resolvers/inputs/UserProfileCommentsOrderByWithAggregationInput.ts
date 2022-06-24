import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsAvgOrderByAggregateInput } from "../inputs/UserProfileCommentsAvgOrderByAggregateInput";
import { UserProfileCommentsCountOrderByAggregateInput } from "../inputs/UserProfileCommentsCountOrderByAggregateInput";
import { UserProfileCommentsMaxOrderByAggregateInput } from "../inputs/UserProfileCommentsMaxOrderByAggregateInput";
import { UserProfileCommentsMinOrderByAggregateInput } from "../inputs/UserProfileCommentsMinOrderByAggregateInput";
import { UserProfileCommentsSumOrderByAggregateInput } from "../inputs/UserProfileCommentsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserProfileCommentsOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserProfileCommentsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => UserProfileCommentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserProfileCommentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserProfileCommentsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserProfileCommentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserProfileCommentsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserProfileCommentsSumOrderByAggregateInput | undefined;
}
