import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutFavPlaylistsInput } from "../inputs/UserProfileCreateWithoutFavPlaylistsInput";
import { UserProfileUpdateWithoutFavPlaylistsInput } from "../inputs/UserProfileUpdateWithoutFavPlaylistsInput";

@TypeGraphQL.InputType("UserProfileUpsertWithoutFavPlaylistsInput", {
  isAbstract: true
})
export class UserProfileUpsertWithoutFavPlaylistsInput {
  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutFavPlaylistsInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutFavPlaylistsInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutFavPlaylistsInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutFavPlaylistsInput;
}
