import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsScalarWhereInput } from "../inputs/UserProfileCommentsScalarWhereInput";
import { UserProfileCommentsUpdateManyMutationInput } from "../inputs/UserProfileCommentsUpdateManyMutationInput";

@TypeGraphQL.InputType("UserProfileCommentsUpdateManyWithWhereWithoutAuthorInput", {
  isAbstract: true
})
export class UserProfileCommentsUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => UserProfileCommentsScalarWhereInput, {
    nullable: false
  })
  where!: UserProfileCommentsScalarWhereInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserProfileCommentsUpdateManyMutationInput;
}
