import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutPostsInput } from "../inputs/UserProfileCreateWithoutPostsInput";
import { UserProfileUpdateWithoutPostsInput } from "../inputs/UserProfileUpdateWithoutPostsInput";

@TypeGraphQL.InputType("UserProfileUpsertWithoutPostsInput", {
  isAbstract: true
})
export class UserProfileUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutPostsInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutPostsInput;
}
