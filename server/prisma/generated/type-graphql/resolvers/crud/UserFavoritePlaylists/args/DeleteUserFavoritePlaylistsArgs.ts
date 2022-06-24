import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoritePlaylistsWhereUniqueInput } from "../../../inputs/UserFavoritePlaylistsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUserFavoritePlaylistsArgs {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput, {
    nullable: false
  })
  where!: UserFavoritePlaylistsWhereUniqueInput;
}
