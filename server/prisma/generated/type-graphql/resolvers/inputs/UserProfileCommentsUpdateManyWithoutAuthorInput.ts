import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsCreateManyAuthorInputEnvelope } from "../inputs/UserProfileCommentsCreateManyAuthorInputEnvelope";
import { UserProfileCommentsCreateOrConnectWithoutAuthorInput } from "../inputs/UserProfileCommentsCreateOrConnectWithoutAuthorInput";
import { UserProfileCommentsCreateWithoutAuthorInput } from "../inputs/UserProfileCommentsCreateWithoutAuthorInput";
import { UserProfileCommentsScalarWhereInput } from "../inputs/UserProfileCommentsScalarWhereInput";
import { UserProfileCommentsUpdateManyWithWhereWithoutAuthorInput } from "../inputs/UserProfileCommentsUpdateManyWithWhereWithoutAuthorInput";
import { UserProfileCommentsUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/UserProfileCommentsUpdateWithWhereUniqueWithoutAuthorInput";
import { UserProfileCommentsUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/UserProfileCommentsUpsertWithWhereUniqueWithoutAuthorInput";
import { UserProfileCommentsWhereUniqueInput } from "../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCommentsUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class UserProfileCommentsUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: UserProfileCommentsCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: UserProfileCommentsCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: UserProfileCommentsUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: UserProfileCommentsCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsWhereUniqueInput], {
    nullable: true
  })
  set?: UserProfileCommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserProfileCommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsWhereUniqueInput], {
    nullable: true
  })
  delete?: UserProfileCommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: UserProfileCommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: UserProfileCommentsUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: UserProfileCommentsUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserProfileCommentsScalarWhereInput[] | undefined;
}
