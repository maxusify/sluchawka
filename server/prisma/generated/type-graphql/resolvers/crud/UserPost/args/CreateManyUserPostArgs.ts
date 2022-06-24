import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPostCreateManyInput } from "../../../inputs/UserPostCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserPostArgs {
  @TypeGraphQL.Field(_type => [UserPostCreateManyInput], {
    nullable: false
  })
  data!: UserPostCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
