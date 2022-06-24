import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoritePlaylistsCreateInput } from "../../../inputs/UserFavoritePlaylistsCreateInput";
import { UserFavoritePlaylistsUpdateInput } from "../../../inputs/UserFavoritePlaylistsUpdateInput";
import { UserFavoritePlaylistsWhereUniqueInput } from "../../../inputs/UserFavoritePlaylistsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserFavoritePlaylistsArgs {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput, {
    nullable: false
  })
  where!: UserFavoritePlaylistsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateInput, {
    nullable: false
  })
  create!: UserFavoritePlaylistsCreateInput;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpdateInput, {
    nullable: false
  })
  update!: UserFavoritePlaylistsUpdateInput;
}
