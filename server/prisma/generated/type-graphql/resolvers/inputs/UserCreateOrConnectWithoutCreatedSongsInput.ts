import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedSongsInput } from "../inputs/UserCreateWithoutCreatedSongsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutCreatedSongsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutCreatedSongsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedSongsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedSongsInput;
}
