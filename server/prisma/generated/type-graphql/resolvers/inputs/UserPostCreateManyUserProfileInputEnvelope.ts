import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostCreateManyUserProfileInput } from "../inputs/UserPostCreateManyUserProfileInput";

@TypeGraphQL.InputType("UserPostCreateManyUserProfileInputEnvelope", {
  isAbstract: true
})
export class UserPostCreateManyUserProfileInputEnvelope {
  @TypeGraphQL.Field(_type => [UserPostCreateManyUserProfileInput], {
    nullable: false
  })
  data!: UserPostCreateManyUserProfileInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
