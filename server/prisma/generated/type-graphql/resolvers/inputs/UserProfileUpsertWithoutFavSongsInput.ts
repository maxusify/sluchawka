import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutFavSongsInput } from "../inputs/UserProfileCreateWithoutFavSongsInput";
import { UserProfileUpdateWithoutFavSongsInput } from "../inputs/UserProfileUpdateWithoutFavSongsInput";

@TypeGraphQL.InputType("UserProfileUpsertWithoutFavSongsInput", {
  isAbstract: true
})
export class UserProfileUpsertWithoutFavSongsInput {
  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutFavSongsInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutFavSongsInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutFavSongsInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutFavSongsInput;
}
