import * as TypeGraphQL from "type-graphql";

export enum UserRole {
  NORMAL = "NORMAL",
  MODERATOR = "MODERATOR",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
