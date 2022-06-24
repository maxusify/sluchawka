import * as TypeGraphQL from "type-graphql";

export enum SongScalarFieldEnum {
  id = "id",
  title = "title",
  authorId = "authorId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userFavoriteSongsId = "userFavoriteSongsId"
}
TypeGraphQL.registerEnumType(SongScalarFieldEnum, {
  name: "SongScalarFieldEnum",
  description: undefined,
});
