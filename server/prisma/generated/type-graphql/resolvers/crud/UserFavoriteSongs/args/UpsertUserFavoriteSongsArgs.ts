import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoriteSongsCreateInput } from "../../../inputs/UserFavoriteSongsCreateInput";
import { UserFavoriteSongsUpdateInput } from "../../../inputs/UserFavoriteSongsUpdateInput";
import { UserFavoriteSongsWhereUniqueInput } from "../../../inputs/UserFavoriteSongsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserFavoriteSongsArgs {
  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereUniqueInput, {
    nullable: false
  })
  where!: UserFavoriteSongsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateInput, {
    nullable: false
  })
  create!: UserFavoriteSongsCreateInput;

  @TypeGraphQL.Field(_type => UserFavoriteSongsUpdateInput, {
    nullable: false
  })
  update!: UserFavoriteSongsUpdateInput;
}
