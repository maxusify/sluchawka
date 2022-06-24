import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCommentsCreateInput } from "../../../inputs/UserProfileCommentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserProfileCommentsArgs {
  @TypeGraphQL.Field(_type => UserProfileCommentsCreateInput, {
    nullable: false
  })
  data!: UserProfileCommentsCreateInput;
}
