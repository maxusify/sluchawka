import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsCreateWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsCreateWithoutUserProfileInput";
import { UserFavoritePlaylistsWhereUniqueInput } from "../inputs/UserFavoritePlaylistsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput, {
    nullable: false
  })
  where!: UserFavoritePlaylistsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserFavoritePlaylistsCreateWithoutUserProfileInput;
}
