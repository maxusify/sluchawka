import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPostWhereInput } from "../../../inputs/UserPostWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserPostArgs {
  @TypeGraphQL.Field(_type => UserPostWhereInput, {
    nullable: true
  })
  where?: UserPostWhereInput | undefined;
}
