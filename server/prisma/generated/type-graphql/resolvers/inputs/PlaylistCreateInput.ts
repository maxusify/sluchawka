import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCreatedPlaylistsInput } from "../inputs/UserCreateNestedOneWithoutCreatedPlaylistsInput";
import { UserFavoritePlaylistsCreateNestedOneWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsCreateNestedOneWithoutPlaylistsInput";

@TypeGraphQL.InputType("PlaylistCreateInput", {
  isAbstract: true
})
export class PlaylistCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedPlaylistsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutCreatedPlaylistsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateNestedOneWithoutPlaylistsInput, {
    nullable: true
  })
  userFavoritePlaylists?: UserFavoritePlaylistsCreateNestedOneWithoutPlaylistsInput | undefined;
}
