import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostCreateWithoutUserProfileInput } from "../inputs/UserPostCreateWithoutUserProfileInput";
import { UserPostUpdateWithoutUserProfileInput } from "../inputs/UserPostUpdateWithoutUserProfileInput";
import { UserPostWhereUniqueInput } from "../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.InputType("UserPostUpsertWithWhereUniqueWithoutUserProfileInput", {
  isAbstract: true
})
export class UserPostUpsertWithWhereUniqueWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserPostWhereUniqueInput, {
    nullable: false
  })
  where!: UserPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPostUpdateWithoutUserProfileInput, {
    nullable: false
  })
  update!: UserPostUpdateWithoutUserProfileInput;

  @TypeGraphQL.Field(_type => UserPostCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserPostCreateWithoutUserProfileInput;
}
