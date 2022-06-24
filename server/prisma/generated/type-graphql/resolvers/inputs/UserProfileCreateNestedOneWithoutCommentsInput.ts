import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutCommentsInput } from "../inputs/UserProfileCreateOrConnectWithoutCommentsInput";
import { UserProfileCreateWithoutCommentsInput } from "../inputs/UserProfileCreateWithoutCommentsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class UserProfileCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;
}
