import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCommentsOrderByWithRelationInput } from "../../../inputs/UserProfileCommentsOrderByWithRelationInput";
import { UserProfileCommentsWhereInput } from "../../../inputs/UserProfileCommentsWhereInput";
import { UserProfileCommentsWhereUniqueInput } from "../../../inputs/UserProfileCommentsWhereUniqueInput";
import { UserProfileCommentsScalarFieldEnum } from "../../../../enums/UserProfileCommentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUserProfileCommentsArgs {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereInput, {
    nullable: true
  })
  where?: UserProfileCommentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserProfileCommentsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserProfileCommentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "authorId" | "content" | "createdAt" | "updatedAt" | "userProfileId"> | undefined;
}
