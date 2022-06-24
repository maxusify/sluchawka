import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedPlaylistsInput } from "../inputs/UserCreateOrConnectWithoutCreatedPlaylistsInput";
import { UserCreateWithoutCreatedPlaylistsInput } from "../inputs/UserCreateWithoutCreatedPlaylistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCreatedPlaylistsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCreatedPlaylistsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedPlaylistsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedPlaylistsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
