import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCommentsCreateManyInput } from "../../../inputs/UserProfileCommentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserProfileCommentsArgs {
  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateManyInput], {
    nullable: false
  })
  data!: UserProfileCommentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
