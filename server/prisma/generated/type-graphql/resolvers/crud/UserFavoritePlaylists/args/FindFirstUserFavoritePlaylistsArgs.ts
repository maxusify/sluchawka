import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoritePlaylistsOrderByWithRelationInput } from "../../../inputs/UserFavoritePlaylistsOrderByWithRelationInput";
import { UserFavoritePlaylistsWhereInput } from "../../../inputs/UserFavoritePlaylistsWhereInput";
import { UserFavoritePlaylistsWhereUniqueInput } from "../../../inputs/UserFavoritePlaylistsWhereUniqueInput";
import { UserFavoritePlaylistsScalarFieldEnum } from "../../../../enums/UserFavoritePlaylistsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUserFavoritePlaylistsArgs {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereInput, {
    nullable: true
  })
  where?: UserFavoritePlaylistsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserFavoritePlaylistsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserFavoritePlaylistsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userProfileId"> | undefined;
}
