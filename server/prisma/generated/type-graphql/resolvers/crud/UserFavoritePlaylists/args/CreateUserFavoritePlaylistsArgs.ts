import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoritePlaylistsCreateInput } from "../../../inputs/UserFavoritePlaylistsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserFavoritePlaylistsArgs {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateInput, {
    nullable: false
  })
  data!: UserFavoritePlaylistsCreateInput;
}
