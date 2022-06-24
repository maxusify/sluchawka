import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsCreateWithoutUserProfileInput } from "../inputs/UserFavoriteSongsCreateWithoutUserProfileInput";
import { UserFavoriteSongsWhereUniqueInput } from "../inputs/UserFavoriteSongsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoriteSongsCreateOrConnectWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoriteSongsCreateOrConnectWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereUniqueInput, {
    nullable: false
  })
  where!: UserFavoriteSongsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserFavoriteSongsCreateWithoutUserProfileInput;
}
