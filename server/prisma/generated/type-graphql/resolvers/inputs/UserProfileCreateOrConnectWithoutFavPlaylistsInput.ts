import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutFavPlaylistsInput } from "../inputs/UserProfileCreateWithoutFavPlaylistsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCreateOrConnectWithoutFavPlaylistsInput", {
  isAbstract: true
})
export class UserProfileCreateOrConnectWithoutFavPlaylistsInput {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutFavPlaylistsInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutFavPlaylistsInput;
}
