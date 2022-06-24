import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostCreateWithoutAuthorInput } from "../inputs/UserPostCreateWithoutAuthorInput";
import { UserPostUpdateWithoutAuthorInput } from "../inputs/UserPostUpdateWithoutAuthorInput";
import { UserPostWhereUniqueInput } from "../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.InputType("UserPostUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class UserPostUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => UserPostWhereUniqueInput, {
    nullable: false
  })
  where!: UserPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPostUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: UserPostUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => UserPostCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: UserPostCreateWithoutAuthorInput;
}
