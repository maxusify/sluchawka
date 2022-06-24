import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPostCreateInput } from "../../../inputs/UserPostCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserPostArgs {
  @TypeGraphQL.Field(_type => UserPostCreateInput, {
    nullable: false
  })
  data!: UserPostCreateInput;
}
