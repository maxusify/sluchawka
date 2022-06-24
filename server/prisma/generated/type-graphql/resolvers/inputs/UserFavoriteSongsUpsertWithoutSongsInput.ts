import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsCreateWithoutSongsInput } from "../inputs/UserFavoriteSongsCreateWithoutSongsInput";
import { UserFavoriteSongsUpdateWithoutSongsInput } from "../inputs/UserFavoriteSongsUpdateWithoutSongsInput";

@TypeGraphQL.InputType("UserFavoriteSongsUpsertWithoutSongsInput", {
  isAbstract: true
})
export class UserFavoriteSongsUpsertWithoutSongsInput {
  @TypeGraphQL.Field(_type => UserFavoriteSongsUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: UserFavoriteSongsUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateWithoutSongsInput, {
    nullable: false
  })
  create!: UserFavoriteSongsCreateWithoutSongsInput;
}
