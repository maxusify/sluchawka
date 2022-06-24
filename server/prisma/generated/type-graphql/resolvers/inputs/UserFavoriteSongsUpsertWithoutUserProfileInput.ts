import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsCreateWithoutUserProfileInput } from "../inputs/UserFavoriteSongsCreateWithoutUserProfileInput";
import { UserFavoriteSongsUpdateWithoutUserProfileInput } from "../inputs/UserFavoriteSongsUpdateWithoutUserProfileInput";

@TypeGraphQL.InputType("UserFavoriteSongsUpsertWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoriteSongsUpsertWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserFavoriteSongsUpdateWithoutUserProfileInput, {
    nullable: false
  })
  update!: UserFavoriteSongsUpdateWithoutUserProfileInput;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserFavoriteSongsCreateWithoutUserProfileInput;
}
