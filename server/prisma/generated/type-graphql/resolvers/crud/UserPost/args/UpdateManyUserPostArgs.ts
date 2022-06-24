import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPostUpdateManyMutationInput } from "../../../inputs/UserPostUpdateManyMutationInput";
import { UserPostWhereInput } from "../../../inputs/UserPostWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserPostArgs {
  @TypeGraphQL.Field(_type => UserPostUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserPostUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserPostWhereInput, {
    nullable: true
  })
  where?: UserPostWhereInput | undefined;
}
