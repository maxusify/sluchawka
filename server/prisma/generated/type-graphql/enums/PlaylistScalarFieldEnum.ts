import * as TypeGraphQL from "type-graphql";

export enum PlaylistScalarFieldEnum {
  id = "id",
  title = "title",
  authorId = "authorId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userFavoritePlaylistsId = "userFavoritePlaylistsId"
}
TypeGraphQL.registerEnumType(PlaylistScalarFieldEnum, {
  name: "PlaylistScalarFieldEnum",
  description: undefined,
});
