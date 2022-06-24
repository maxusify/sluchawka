import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCommentsUpdateInput } from "../../../inputs/UserProfileCommentsUpdateInput";
import { UserProfileCommentsWhereUniqueInput } from "../../../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserProfileCommentsArgs {
  @TypeGraphQL.Field(_type => UserProfileCommentsUpdateInput, {
    nullable: false
  })
  data!: UserProfileCommentsUpdateInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileCommentsWhereUniqueInput;
}
