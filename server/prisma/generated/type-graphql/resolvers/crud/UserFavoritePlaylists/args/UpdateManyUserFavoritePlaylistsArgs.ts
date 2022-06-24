import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoritePlaylistsUpdateManyMutationInput } from "../../../inputs/UserFavoritePlaylistsUpdateManyMutationInput";
import { UserFavoritePlaylistsWhereInput } from "../../../inputs/UserFavoritePlaylistsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserFavoritePlaylistsArgs {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserFavoritePlaylistsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereInput, {
    nullable: true
  })
  where?: UserFavoritePlaylistsWhereInput | undefined;
}
