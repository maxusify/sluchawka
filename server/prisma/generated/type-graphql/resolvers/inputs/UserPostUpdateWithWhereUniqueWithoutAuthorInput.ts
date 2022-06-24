import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostUpdateWithoutAuthorInput } from "../inputs/UserPostUpdateWithoutAuthorInput";
import { UserPostWhereUniqueInput } from "../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.InputType("UserPostUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class UserPostUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => UserPostWhereUniqueInput, {
    nullable: false
  })
  where!: UserPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPostUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: UserPostUpdateWithoutAuthorInput;
}
