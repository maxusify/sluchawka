import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoriteSongsWhereInput } from "../../../inputs/UserFavoriteSongsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserFavoriteSongsArgs {
  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereInput, {
    nullable: true
  })
  where?: UserFavoriteSongsWhereInput | undefined;
}
