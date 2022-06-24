import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPostOrderByWithRelationInput } from "../../../inputs/UserPostOrderByWithRelationInput";
import { UserPostWhereInput } from "../../../inputs/UserPostWhereInput";
import { UserPostWhereUniqueInput } from "../../../inputs/UserPostWhereUniqueInput";
import { UserPostScalarFieldEnum } from "../../../../enums/UserPostScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUserPostArgs {
  @TypeGraphQL.Field(_type => UserPostWhereInput, {
    nullable: true
  })
  where?: UserPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserPostOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserPostOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserPostWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserPostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserPostScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "authorId" | "title" | "content" | "createdAt" | "updatedAt" | "userProfileId"> | undefined;
}
