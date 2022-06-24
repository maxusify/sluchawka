import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostUpdateWithoutUserProfileInput } from "../inputs/UserPostUpdateWithoutUserProfileInput";
import { UserPostWhereUniqueInput } from "../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.InputType("UserPostUpdateWithWhereUniqueWithoutUserProfileInput", {
  isAbstract: true
})
export class UserPostUpdateWithWhereUniqueWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserPostWhereUniqueInput, {
    nullable: false
  })
  where!: UserPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPostUpdateWithoutUserProfileInput, {
    nullable: false
  })
  data!: UserPostUpdateWithoutUserProfileInput;
}
