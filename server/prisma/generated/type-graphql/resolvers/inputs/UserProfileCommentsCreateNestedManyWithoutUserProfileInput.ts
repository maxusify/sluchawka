import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsCreateManyUserProfileInputEnvelope } from "../inputs/UserProfileCommentsCreateManyUserProfileInputEnvelope";
import { UserProfileCommentsCreateOrConnectWithoutUserProfileInput } from "../inputs/UserProfileCommentsCreateOrConnectWithoutUserProfileInput";
import { UserProfileCommentsCreateWithoutUserProfileInput } from "../inputs/UserProfileCommentsCreateWithoutUserProfileInput";
import { UserProfileCommentsWhereUniqueInput } from "../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCommentsCreateNestedManyWithoutUserProfileInput", {
  isAbstract: true
})
export class UserProfileCommentsCreateNestedManyWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateWithoutUserProfileInput], {
    nullable: true
  })
  create?: UserProfileCommentsCreateWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateOrConnectWithoutUserProfileInput], {
    nullable: true
  })
  connectOrCreate?: UserProfileCommentsCreateOrConnectWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateManyUserProfileInputEnvelope, {
    nullable: true
  })
  createMany?: UserProfileCommentsCreateManyUserProfileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: UserProfileCommentsWhereUniqueInput[] | undefined;
}
