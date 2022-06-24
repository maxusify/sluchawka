import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsCreateManyUserProfileInput } from "../inputs/UserProfileCommentsCreateManyUserProfileInput";

@TypeGraphQL.InputType("UserProfileCommentsCreateManyUserProfileInputEnvelope", {
  isAbstract: true
})
export class UserProfileCommentsCreateManyUserProfileInputEnvelope {
  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateManyUserProfileInput], {
    nullable: false
  })
  data!: UserProfileCommentsCreateManyUserProfileInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
