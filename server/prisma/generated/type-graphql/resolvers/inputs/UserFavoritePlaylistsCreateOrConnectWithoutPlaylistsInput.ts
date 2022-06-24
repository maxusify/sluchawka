import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsCreateWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsCreateWithoutPlaylistsInput";
import { UserFavoritePlaylistsWhereUniqueInput } from "../inputs/UserFavoritePlaylistsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput, {
    nullable: false
  })
  where!: UserFavoritePlaylistsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateWithoutPlaylistsInput, {
    nullable: false
  })
  create!: UserFavoritePlaylistsCreateWithoutPlaylistsInput;
}
