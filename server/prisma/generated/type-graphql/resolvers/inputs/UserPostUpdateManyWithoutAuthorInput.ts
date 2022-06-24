import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostCreateManyAuthorInputEnvelope } from "../inputs/UserPostCreateManyAuthorInputEnvelope";
import { UserPostCreateOrConnectWithoutAuthorInput } from "../inputs/UserPostCreateOrConnectWithoutAuthorInput";
import { UserPostCreateWithoutAuthorInput } from "../inputs/UserPostCreateWithoutAuthorInput";
import { UserPostScalarWhereInput } from "../inputs/UserPostScalarWhereInput";
import { UserPostUpdateManyWithWhereWithoutAuthorInput } from "../inputs/UserPostUpdateManyWithWhereWithoutAuthorInput";
import { UserPostUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/UserPostUpdateWithWhereUniqueWithoutAuthorInput";
import { UserPostUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/UserPostUpsertWithWhereUniqueWithoutAuthorInput";
import { UserPostWhereUniqueInput } from "../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.InputType("UserPostUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class UserPostUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [UserPostCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: UserPostCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: UserPostCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: UserPostUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => UserPostCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: UserPostCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserPostUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: UserPostUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: UserPostUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserPostScalarWhereInput[] | undefined;
}
