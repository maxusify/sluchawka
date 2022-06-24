import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPostCreateInput } from "../../../inputs/UserPostCreateInput";
import { UserPostUpdateInput } from "../../../inputs/UserPostUpdateInput";
import { UserPostWhereUniqueInput } from "../../../inputs/UserPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserPostArgs {
  @TypeGraphQL.Field(_type => UserPostWhereUniqueInput, {
    nullable: false
  })
  where!: UserPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPostCreateInput, {
    nullable: false
  })
  create!: UserPostCreateInput;

  @TypeGraphQL.Field(_type => UserPostUpdateInput, {
    nullable: false
  })
  update!: UserPostUpdateInput;
}
