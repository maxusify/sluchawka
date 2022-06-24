import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutFavPlaylistsInput } from "../inputs/UserProfileCreateOrConnectWithoutFavPlaylistsInput";
import { UserProfileCreateWithoutFavPlaylistsInput } from "../inputs/UserProfileCreateWithoutFavPlaylistsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCreateNestedOneWithoutFavPlaylistsInput", {
  isAbstract: true
})
export class UserProfileCreateNestedOneWithoutFavPlaylistsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutFavPlaylistsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutFavPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutFavPlaylistsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutFavPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;
}
