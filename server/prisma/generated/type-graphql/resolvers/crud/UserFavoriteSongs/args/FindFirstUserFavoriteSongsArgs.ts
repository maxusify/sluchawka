import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoriteSongsOrderByWithRelationInput } from "../../../inputs/UserFavoriteSongsOrderByWithRelationInput";
import { UserFavoriteSongsWhereInput } from "../../../inputs/UserFavoriteSongsWhereInput";
import { UserFavoriteSongsWhereUniqueInput } from "../../../inputs/UserFavoriteSongsWhereUniqueInput";
import { UserFavoriteSongsScalarFieldEnum } from "../../../../enums/UserFavoriteSongsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUserFavoriteSongsArgs {
  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereInput, {
    nullable: true
  })
  where?: UserFavoriteSongsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserFavoriteSongsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserFavoriteSongsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserFavoriteSongsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserFavoriteSongsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userProfileId"> | undefined;
}
