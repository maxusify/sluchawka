import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";
import { UserFavoriteSongsCreateNestedOneWithoutUserProfileInput } from "../inputs/UserFavoriteSongsCreateNestedOneWithoutUserProfileInput";
import { UserPostCreateNestedManyWithoutUserProfileInput } from "../inputs/UserPostCreateNestedManyWithoutUserProfileInput";
import { UserProfileCommentsCreateNestedManyWithoutUserProfileInput } from "../inputs/UserProfileCommentsCreateNestedManyWithoutUserProfileInput";

@TypeGraphQL.InputType("UserProfileCreateWithoutFavPlaylistsInput", {
  isAbstract: true
})
export class UserProfileCreateWithoutFavPlaylistsInput {
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

  @TypeGraphQL.Field(_type => UserPostCreateNestedManyWithoutUserProfileInput, {
    nullable: true
  })
  posts?: UserPostCreateNestedManyWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateNestedManyWithoutUserProfileInput, {
    nullable: true
  })
  comments?: UserProfileCommentsCreateNestedManyWithoutUserProfileInput | undefined;
}
