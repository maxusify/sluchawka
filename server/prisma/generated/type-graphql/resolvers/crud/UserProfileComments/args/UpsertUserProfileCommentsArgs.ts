import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCommentsCreateInput } from "../../../inputs/UserProfileCommentsCreateInput";
import { UserProfileCommentsUpdateInput } from "../../../inputs/UserProfileCommentsUpdateInput";
import { UserProfileCommentsWhereUniqueInput } from "../../../inputs/UserProfileCommentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserProfileCommentsArgs {
  @TypeGraphQL.Field(_type => UserProfileCommentsWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileCommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateInput, {
    nullable: false
  })
  create!: UserProfileCommentsCreateInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsUpdateInput, {
    nullable: false
  })
  update!: UserProfileCommentsUpdateInput;
}
