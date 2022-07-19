import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  emailVerified = "emailVerified",
  password = "password",
  role = "role",
  picture = "picture"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
