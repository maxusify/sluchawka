import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCountOrderByAggregateInput } from "../inputs/UserProfileCountOrderByAggregateInput";
import { UserProfileMaxOrderByAggregateInput } from "../inputs/UserProfileMaxOrderByAggregateInput";
import { UserProfileMinOrderByAggregateInput } from "../inputs/UserProfileMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserProfileOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserProfileOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserProfileCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserProfileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserProfileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserProfileMinOrderByAggregateInput | undefined;
}
