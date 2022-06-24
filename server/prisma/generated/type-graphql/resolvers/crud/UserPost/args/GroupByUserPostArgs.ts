import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPostOrderByWithAggregationInput } from "../../../inputs/UserPostOrderByWithAggregationInput";
import { UserPostScalarWhereWithAggregatesInput } from "../../../inputs/UserPostScalarWhereWithAggregatesInput";
import { UserPostWhereInput } from "../../../inputs/UserPostWhereInput";
import { UserPostScalarFieldEnum } from "../../../../enums/UserPostScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserPostArgs {
  @TypeGraphQL.Field(_type => UserPostWhereInput, {
    nullable: true
  })
  where?: UserPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserPostOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserPostOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "authorId" | "title" | "content" | "createdAt" | "updatedAt" | "userProfileId">;

  @TypeGraphQL.Field(_type => UserPostScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserPostScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
