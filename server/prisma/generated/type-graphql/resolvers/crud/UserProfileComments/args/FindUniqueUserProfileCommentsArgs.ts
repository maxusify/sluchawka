import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCommentsWhereUniqueInput } from "../../../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserProfileCommentsArgs {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileCommentsWhereUniqueInput;
}
