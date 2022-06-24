import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedSongsInput } from "../inputs/UserCreateOrConnectWithoutCreatedSongsInput";
import { UserCreateWithoutCreatedSongsInput } from "../inputs/UserCreateWithoutCreatedSongsInput";
import { UserUpdateWithoutCreatedSongsInput } from "../inputs/UserUpdateWithoutCreatedSongsInput";
import { UserUpsertWithoutCreatedSongsInput } from "../inputs/UserUpsertWithoutCreatedSongsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCreatedSongsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCreatedSongsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedSongsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedSongsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatedSongsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedSongsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCreatedSongsInput | undefined;
}
