import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutCommentsInput } from "../inputs/UserProfileCreateWithoutCommentsInput";
import { UserProfileUpdateWithoutCommentsInput } from "../inputs/UserProfileUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("UserProfileUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class UserProfileUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutCommentsInput;
}
