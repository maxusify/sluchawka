import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoriteSongsUpdateManyMutationInput } from "../../../inputs/UserFavoriteSongsUpdateManyMutationInput";
import { UserFavoriteSongsWhereInput } from "../../../inputs/UserFavoriteSongsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserFavoriteSongsArgs {
  @TypeGraphQL.Field(_type => UserFavoriteSongsUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserFavoriteSongsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereInput, {
    nullable: true
  })
  where?: UserFavoriteSongsWhereInput | undefined;
}
