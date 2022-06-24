import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoritePlaylistsUpdateInput } from "../../../inputs/UserFavoritePlaylistsUpdateInput";
import { UserFavoritePlaylistsWhereUniqueInput } from "../../../inputs/UserFavoritePlaylistsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserFavoritePlaylistsArgs {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpdateInput, {
    nullable: false
  })
  data!: UserFavoritePlaylistsUpdateInput;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput, {
    nullable: false
  })
  where!: UserFavoritePlaylistsWhereUniqueInput;
}
