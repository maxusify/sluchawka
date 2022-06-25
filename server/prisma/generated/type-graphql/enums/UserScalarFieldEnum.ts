import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email",
  emailVerified = "emailVerified",
  password = "password",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  role = "role",
  picture = "picture"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
