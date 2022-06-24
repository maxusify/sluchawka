import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateNestedOneWithoutFavPlaylistsInput } from "../inputs/UserProfileCreateNestedOneWithoutFavPlaylistsInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsCreateWithoutPlaylistsInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsCreateWithoutPlaylistsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutFavPlaylistsInput, {
    nullable: false
  })
  userProfile!: UserProfileCreateNestedOneWithoutFavPlaylistsInput;
}
