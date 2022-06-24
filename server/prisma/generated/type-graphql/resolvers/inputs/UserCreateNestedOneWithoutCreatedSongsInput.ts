import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedSongsInput } from "../inputs/UserCreateOrConnectWithoutCreatedSongsInput";
import { UserCreateWithoutCreatedSongsInput } from "../inputs/UserCreateWithoutCreatedSongsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCreatedSongsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCreatedSongsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedSongsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedSongsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
