import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCommentsOrderByWithAggregationInput } from "../../../inputs/UserProfileCommentsOrderByWithAggregationInput";
import { UserProfileCommentsScalarWhereWithAggregatesInput } from "../../../inputs/UserProfileCommentsScalarWhereWithAggregatesInput";
import { UserProfileCommentsWhereInput } from "../../../inputs/UserProfileCommentsWhereInput";
import { UserProfileCommentsScalarFieldEnum } from "../../../../enums/UserProfileCommentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserProfileCommentsArgs {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereInput, {
    nullable: true
  })
  where?: UserProfileCommentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserProfileCommentsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "authorId" | "content" | "createdAt" | "updatedAt" | "userProfileId">;

  @TypeGraphQL.Field(_type => UserProfileCommentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserProfileCommentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
