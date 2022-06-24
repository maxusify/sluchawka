import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostWhereInput } from "../inputs/UserPostWhereInput";

@TypeGraphQL.InputType("UserPostListRelationFilter", {
  isAbstract: true
})
export class UserPostListRelationFilter {
  @TypeGraphQL.Field(_type => UserPostWhereInput, {
    nullable: true
  })
  every?: UserPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserPostWhereInput, {
    nullable: true
  })
  some?: UserPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserPostWhereInput, {
    nullable: true
  })
  none?: UserPostWhereInput | undefined;
}
