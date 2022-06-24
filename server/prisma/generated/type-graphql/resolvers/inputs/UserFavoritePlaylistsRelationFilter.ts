import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsWhereInput } from "../inputs/UserFavoritePlaylistsWhereInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsRelationFilter", {
  isAbstract: true
})
export class UserFavoritePlaylistsRelationFilter {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereInput, {
    nullable: true
  })
  is?: UserFavoritePlaylistsWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereInput, {
    nullable: true
  })
  isNot?: UserFavoritePlaylistsWhereInput | undefined;
}
