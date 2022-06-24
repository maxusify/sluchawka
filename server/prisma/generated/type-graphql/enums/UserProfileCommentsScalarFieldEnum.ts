import * as TypeGraphQL from "type-graphql";

export enum UserProfileCommentsScalarFieldEnum {
  id = "id",
  authorId = "authorId",
  content = "content",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userProfileId = "userProfileId"
}
TypeGraphQL.registerEnumType(UserProfileCommentsScalarFieldEnum, {
  name: "UserProfileCommentsScalarFieldEnum",
  description: undefined,
});
