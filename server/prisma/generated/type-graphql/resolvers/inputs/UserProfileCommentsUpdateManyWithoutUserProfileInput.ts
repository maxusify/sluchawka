import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsCreateManyUserProfileInputEnvelope } from "../inputs/UserProfileCommentsCreateManyUserProfileInputEnvelope";
import { UserProfileCommentsCreateOrConnectWithoutUserProfileInput } from "../inputs/UserProfileCommentsCreateOrConnectWithoutUserProfileInput";
import { UserProfileCommentsCreateWithoutUserProfileInput } from "../inputs/UserProfileCommentsCreateWithoutUserProfileInput";
import { UserProfileCommentsScalarWhereInput } from "../inputs/UserProfileCommentsScalarWhereInput";
import { UserProfileCommentsUpdateManyWithWhereWithoutUserProfileInput } from "../inputs/UserProfileCommentsUpdateManyWithWhereWithoutUserProfileInput";
import { UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput } from "../inputs/UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput";
import { UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput } from "../inputs/UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput";
import { UserProfileCommentsWhereUniqueInput } from "../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCommentsUpdateManyWithoutUserProfileInput", {
  isAbstract: true
})
export class UserProfileCommentsUpdateManyWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateWithoutUserProfileInput], {
    nullable: true
  })
  create?: UserProfileCommentsCreateWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateOrConnectWithoutUserProfileInput], {
    nullable: true
  })
  connectOrCreate?: UserProfileCommentsCreateOrConnectWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput], {
    nullable: true
  })
  upsert?: UserProfileCommentsUpsertWithWhereUniqueWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateManyUserProfileInputEnvelope, {
    nullable: true
  })
  createMany?: UserProfileCommentsCreateManyUserProfileInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput], {
    nullable: true
  })
  update?: UserProfileCommentsUpdateWithWhereUniqueWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsUpdateManyWithWhereWithoutUserProfileInput], {
    nullable: true
  })
  updateMany?: UserProfileCommentsUpdateManyWithWhereWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserProfileCommentsScalarWhereInput[] | undefined;
}
