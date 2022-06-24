import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostScalarWhereInput } from "../inputs/UserPostScalarWhereInput";
import { UserPostUpdateManyMutationInput } from "../inputs/UserPostUpdateManyMutationInput";

@TypeGraphQL.InputType("UserPostUpdateManyWithWhereWithoutUserProfileInput", {
  isAbstract: true
})
export class UserPostUpdateManyWithWhereWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserPostScalarWhereInput, {
    nullable: false
  })
  where!: UserPostScalarWhereInput;

  @TypeGraphQL.Field(_type => UserPostUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserPostUpdateManyMutationInput;
}
