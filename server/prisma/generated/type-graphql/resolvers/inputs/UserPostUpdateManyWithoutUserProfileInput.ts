import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostCreateManyUserProfileInputEnvelope } from "../inputs/UserPostCreateManyUserProfileInputEnvelope";
import { UserPostCreateOrConnectWithoutUserProfileInput } from "../inputs/UserPostCreateOrConnectWithoutUserProfileInput";
import { UserPostCreateWithoutUserProfileInput } from "../inputs/UserPostCreateWithoutUserProfileInput";
import { UserPostScalarWhereInput } from "../inputs/UserPostScalarWhereInput";
import { UserPostUpdateManyWithWhereWithoutUserProfileInput } from "../inputs/UserPostUpdateManyWithWhereWithoutUserProfileInput";
import { UserPostUpdateWithWhereUniqueWithoutUserProfileInput } from "../inputs/UserPostUpdateWithWhereUniqueWithoutUserProfileInput";
import { UserPostUpsertWithWhereUniqueWithoutUserProfileInput } from "../inputs/UserPostUpsertWithWhereUniqueWithoutUserProfileInput";
import { UserPostWhereUniqueInput } from "../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.InputType("UserPostUpdateManyWithoutUserProfileInput", {
  isAbstract: true
})
export class UserPostUpdateManyWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => [UserPostCreateWithoutUserProfileInput], {
    nullable: true
  })
  create?: UserPostCreateWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostCreateOrConnectWithoutUserProfileInput], {
    nullable: true
  })
  connectOrCreate?: UserPostCreateOrConnectWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostUpsertWithWhereUniqueWithoutUserProfileInput], {
    nullable: true
  })
  upsert?: UserPostUpsertWithWhereUniqueWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => UserPostCreateManyUserProfileInputEnvelope, {
    nullable: true
  })
  createMany?: UserPostCreateManyUserProfileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserPostWhereUniqueInput], {
    nullable: true
  })
  set?: UserPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostWhereUniqueInput], {
    nullable: true
  })
  delete?: UserPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostWhereUniqueInput], {
    nullable: true
  })
  connect?: UserPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostUpdateWithWhereUniqueWithoutUserProfileInput], {
    nullable: true
  })
  update?: UserPostUpdateWithWhereUniqueWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostUpdateManyWithWhereWithoutUserProfileInput], {
    nullable: true
  })
  updateMany?: UserPostUpdateManyWithWhereWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserPostScalarWhereInput[] | undefined;
}
