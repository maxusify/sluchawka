import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostCreateManyAuthorInputEnvelope } from "../inputs/UserPostCreateManyAuthorInputEnvelope";
import { UserPostCreateOrConnectWithoutAuthorInput } from "../inputs/UserPostCreateOrConnectWithoutAuthorInput";
import { UserPostCreateWithoutAuthorInput } from "../inputs/UserPostCreateWithoutAuthorInput";
import { UserPostWhereUniqueInput } from "../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.InputType("UserPostCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class UserPostCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [UserPostCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: UserPostCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPostCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: UserPostCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => UserPostCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: UserPostCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserPostWhereUniqueInput], {
    nullable: true
  })
  connect?: UserPostWhereUniqueInput[] | undefined;
}
