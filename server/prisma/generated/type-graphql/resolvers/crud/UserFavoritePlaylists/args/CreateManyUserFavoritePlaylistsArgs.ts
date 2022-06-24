import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoritePlaylistsCreateManyInput } from "../../../inputs/UserFavoritePlaylistsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserFavoritePlaylistsArgs {
  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsCreateManyInput], {
    nullable: false
  })
  data!: UserFavoritePlaylistsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
