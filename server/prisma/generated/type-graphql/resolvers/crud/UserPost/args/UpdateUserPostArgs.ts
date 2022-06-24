import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPostUpdateInput } from "../../../inputs/UserPostUpdateInput";
import { UserPostWhereUniqueInput } from "../../../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserPostArgs {
  @TypeGraphQL.Field(_type => UserPostUpdateInput, {
    nullable: false
  })
  data!: UserPostUpdateInput;

  @TypeGraphQL.Field(_type => UserPostWhereUniqueInput, {
    nullable: false
  })
  where!: UserPostWhereUniqueInput;
}
