import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUserRoleFilter } from "../inputs/NestedEnumUserRoleFilter";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType("EnumUserRoleFilter", {
  isAbstract: true
})
export class EnumUserRoleFilter {
  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  equals?: "NORMAL" | "MODERATOR" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [UserRole], {
    nullable: true
  })
  in?: Array<"NORMAL" | "MODERATOR" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [UserRole], {
    nullable: true
  })
  notIn?: Array<"NORMAL" | "MODERATOR" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleFilter, {
    nullable: true
  })
  not?: NestedEnumUserRoleFilter | undefined;
}
