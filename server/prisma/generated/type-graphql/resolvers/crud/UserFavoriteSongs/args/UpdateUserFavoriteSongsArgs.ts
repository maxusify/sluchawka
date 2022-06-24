import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoriteSongsUpdateInput } from "../../../inputs/UserFavoriteSongsUpdateInput";
import { UserFavoriteSongsWhereUniqueInput } from "../../../inputs/UserFavoriteSongsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserFavoriteSongsArgs {
  @TypeGraphQL.Field(_type => UserFavoriteSongsUpdateInput, {
    nullable: false
  })
  data!: UserFavoriteSongsUpdateInput;

  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereUniqueInput, {
    nullable: false
  })
  where!: UserFavoriteSongsWhereUniqueInput;
}
