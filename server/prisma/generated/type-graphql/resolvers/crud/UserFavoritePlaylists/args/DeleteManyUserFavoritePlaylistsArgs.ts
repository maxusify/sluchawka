import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoritePlaylistsWhereInput } from "../../../inputs/UserFavoritePlaylistsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserFavoritePlaylistsArgs {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereInput, {
    nullable: true
  })
  where?: UserFavoritePlaylistsWhereInput | undefined;
}
