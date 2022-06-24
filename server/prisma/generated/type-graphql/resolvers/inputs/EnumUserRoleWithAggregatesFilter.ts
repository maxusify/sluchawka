import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUserRoleFilter } from "../inputs/NestedEnumUserRoleFilter";
import { NestedEnumUserRoleWithAggregatesFilter } from "../inputs/NestedEnumUserRoleWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType("EnumUserRoleWithAggregatesFilter", {
  isAbstract: true
})
export class EnumUserRoleWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumUserRoleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumUserRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleFilter, {
    nullable: true
  })
  _min?: NestedEnumUserRoleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleFilter, {
    nullable: true
  })
  _max?: NestedEnumUserRoleFilter | undefined;
}
