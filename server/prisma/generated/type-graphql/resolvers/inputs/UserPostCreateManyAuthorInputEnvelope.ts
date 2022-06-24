import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostCreateManyAuthorInput } from "../inputs/UserPostCreateManyAuthorInput";

@TypeGraphQL.InputType("UserPostCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class UserPostCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [UserPostCreateManyAuthorInput], {
    nullable: false
  })
  data!: UserPostCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
