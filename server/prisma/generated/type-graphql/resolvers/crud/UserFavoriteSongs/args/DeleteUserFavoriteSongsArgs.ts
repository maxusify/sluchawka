import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoriteSongsWhereUniqueInput } from "../../../inputs/UserFavoriteSongsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUserFavoriteSongsArgs {
  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereUniqueInput, {
    nullable: false
  })
  where!: UserFavoriteSongsWhereUniqueInput;
}
