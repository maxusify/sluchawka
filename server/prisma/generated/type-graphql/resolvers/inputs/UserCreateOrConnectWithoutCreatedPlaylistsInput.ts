import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedPlaylistsInput } from "../inputs/UserCreateWithoutCreatedPlaylistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutCreatedPlaylistsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutCreatedPlaylistsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedPlaylistsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedPlaylistsInput;
}
