import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserFavoriteSongsCreateManyInput } from "../../../inputs/UserFavoriteSongsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserFavoriteSongsArgs {
  @TypeGraphQL.Field(_type => [UserFavoriteSongsCreateManyInput], {
    nullable: false
  })
  data!: UserFavoriteSongsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
