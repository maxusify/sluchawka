import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateNestedOneWithoutFavSongsInput } from "../inputs/UserProfileCreateNestedOneWithoutFavSongsInput";

@TypeGraphQL.InputType("UserFavoriteSongsCreateWithoutSongsInput", {
  isAbstract: true
})
export class UserFavoriteSongsCreateWithoutSongsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutFavSongsInput, {
    nullable: false
  })
  userProfile!: UserProfileCreateNestedOneWithoutFavSongsInput;
}
