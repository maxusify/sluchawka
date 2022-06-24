import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";
import { UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput";
import { UserFavoriteSongsCreateNestedOneWithoutUserProfileInput } from "../inputs/UserFavoriteSongsCreateNestedOneWithoutUserProfileInput";
import { UserPostCreateNestedManyWithoutUserProfileInput } from "../inputs/UserPostCreateNestedManyWithoutUserProfileInput";

@TypeGraphQL.InputType("UserProfileCreateWithoutCommentsInput", {
  isAbstract: true
})
export class UserProfileCreateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProfileInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutProfileInput;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateNestedOneWithoutUserProfileInput, {
    nullable: true
  })
  favSongs?: UserFavoriteSongsCreateNestedOneWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput, {
    nullable: true
  })
  favPlaylists?: UserFavoritePlaylistsCreateNestedOneWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserPostCreateNestedManyWithoutUserProfileInput, {
    nullable: true
  })
  posts?: UserPostCreateNestedManyWithoutUserProfileInput | undefined;
}
