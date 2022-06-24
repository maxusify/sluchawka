import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCreatedPostsInput } from "../inputs/UserCreateOrConnectWithoutCreatedPostsInput";
import { UserCreateWithoutCreatedPostsInput } from "../inputs/UserCreateWithoutCreatedPostsInput";
import { UserUpdateWithoutCreatedPostsInput } from "../inputs/UserUpdateWithoutCreatedPostsInput";
import { UserUpsertWithoutCreatedPostsInput } from "../inputs/UserUpsertWithoutCreatedPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCreatedPostsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCreatedPostsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedPostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatedPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatedPostsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatedPostsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCreatedPostsInput | undefined;
}
