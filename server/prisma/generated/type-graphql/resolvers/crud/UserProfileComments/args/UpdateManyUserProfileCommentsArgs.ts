import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCommentsUpdateManyMutationInput } from "../../../inputs/UserProfileCommentsUpdateManyMutationInput";
import { UserProfileCommentsWhereInput } from "../../../inputs/UserProfileCommentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserProfileCommentsArgs {
  @TypeGraphQL.Field(_type => UserProfileCommentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserProfileCommentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserProfileCommentsWhereInput, {
    nullable: true
  })
  where?: UserProfileCommentsWhereInput | undefined;
}
