import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsCreateManyAuthorInputEnvelope } from "../inputs/UserProfileCommentsCreateManyAuthorInputEnvelope";
import { UserProfileCommentsCreateOrConnectWithoutAuthorInput } from "../inputs/UserProfileCommentsCreateOrConnectWithoutAuthorInput";
import { UserProfileCommentsCreateWithoutAuthorInput } from "../inputs/UserProfileCommentsCreateWithoutAuthorInput";
import { UserProfileCommentsWhereUniqueInput } from "../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCommentsCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class UserProfileCommentsCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: UserProfileCommentsCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: UserProfileCommentsCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: UserProfileCommentsCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: UserProfileCommentsWhereUniqueInput[] | undefined;
}
