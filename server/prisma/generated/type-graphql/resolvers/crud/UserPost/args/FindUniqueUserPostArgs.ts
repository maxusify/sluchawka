import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPostWhereUniqueInput } from "../../../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserPostArgs {
  @TypeGraphQL.Field(_type => UserPostWhereUniqueInput, {
    nullable: false
  })
  where!: UserPostWhereUniqueInput;
}
