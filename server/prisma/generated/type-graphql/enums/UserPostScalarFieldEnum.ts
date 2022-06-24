import * as TypeGraphQL from "type-graphql";

export enum UserPostScalarFieldEnum {
  id = "id",
  authorId = "authorId",
  title = "title",
  content = "content",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userProfileId = "userProfileId"
}
TypeGraphQL.registerEnumType(UserPostScalarFieldEnum, {
  name: "UserPostScalarFieldEnum",
  description: undefined,
});
