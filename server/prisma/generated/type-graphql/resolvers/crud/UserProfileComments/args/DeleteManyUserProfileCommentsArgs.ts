import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCommentsWhereInput } from "../../../inputs/UserProfileCommentsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserProfileCommentsArgs {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereInput, {
    nullable: true
  })
  where?: UserProfileCommentsWhereInput | undefined;
}
