import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsWhereInput } from "../inputs/UserFavoriteSongsWhereInput";

@TypeGraphQL.InputType("UserFavoriteSongsRelationFilter", {
  isAbstract: true
})
export class UserFavoriteSongsRelationFilter {
  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereInput, {
    nullable: true
  })
  is?: UserFavoriteSongsWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereInput, {
    nullable: true
  })
  isNot?: UserFavoriteSongsWhereInput | undefined;
}
