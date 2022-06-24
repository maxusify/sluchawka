import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput";
import { UserFavoritePlaylistsCreateWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsCreateWithoutUserProfileInput";
import { UserFavoritePlaylistsWhereUniqueInput } from "../inputs/UserFavoritePlaylistsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateWithoutUserProfileInput, {
    nullable: true
  })
  create?: UserFavoritePlaylistsCreateWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput, {
    nullable: true
  })
  connectOrCreate?: UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput, {
    nullable: true
  })
  connect?: UserFavoritePlaylistsWhereUniqueInput | undefined;
}
