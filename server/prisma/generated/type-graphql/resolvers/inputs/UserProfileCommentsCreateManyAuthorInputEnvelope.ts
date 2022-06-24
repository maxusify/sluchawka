import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsCreateManyAuthorInput } from "../inputs/UserProfileCommentsCreateManyAuthorInput";

@TypeGraphQL.InputType("UserProfileCommentsCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class UserProfileCommentsCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [UserProfileCommentsCreateManyAuthorInput], {
    nullable: false
  })
  data!: UserProfileCommentsCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
