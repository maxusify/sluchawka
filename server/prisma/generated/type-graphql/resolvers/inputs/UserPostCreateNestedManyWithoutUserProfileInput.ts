import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostCreateManyUserProfileInputEnvelope } from "../inputs/UserPostCreateManyUserProfileInputEnvelope";
import { UserPostCreateOrConnectWithoutUserProfileInput } from "../inputs/UserPostCreateOrConnectWithoutUserProfileInput";
import { UserPostCreateWithoutUserProfileInput } from "../inputs/UserPostCreateWithoutUserProfileInput";
import { UserPostWhereUniqueInput } from "../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.InputType("UserPostCreateNestedManyWithoutUserProfileInput", {
  isAbstract: true
})
export class UserPostCreateNestedManyWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => [UserPostCreateWithoutUserProfileInput], {
    nullable: true
  })
  create?: UserPostCreateWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostCreateOrConnectWithoutUserProfileInput], {
    nullable: true
  })
  connectOrCreate?: UserPostCreateOrConnectWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => UserPostCreateManyUserProfileInputEnvelope, {
    nullable: true
  })
  createMany?: UserPostCreateManyUserProfileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserPostWhereUniqueInput], {
    nullable: true
  })
  connect?: UserPostWhereUniqueInput[] | undefined;
}
