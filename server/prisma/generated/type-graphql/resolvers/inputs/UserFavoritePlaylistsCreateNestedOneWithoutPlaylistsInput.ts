import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput";
import { UserFavoritePlaylistsCreateWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsCreateWithoutPlaylistsInput";
import { UserFavoritePlaylistsWhereUniqueInput } from "../inputs/UserFavoritePlaylistsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsCreateNestedOneWithoutPlaylistsInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsCreateNestedOneWithoutPlaylistsInput {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateWithoutPlaylistsInput, {
    nullable: true
  })
  create?: UserFavoritePlaylistsCreateWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput, {
    nullable: true
  })
  connectOrCreate?: UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput, {
    nullable: true
  })
  connect?: UserFavoritePlaylistsWhereUniqueInput | undefined;
}
