import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoriteSongsCreateInput } from "../../../inputs/UserFavoriteSongsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserFavoriteSongsArgs {
  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateInput, {
    nullable: false
  })
  data!: UserFavoriteSongsCreateInput;
}
