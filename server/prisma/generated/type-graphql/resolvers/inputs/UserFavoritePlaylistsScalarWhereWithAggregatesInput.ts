import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserFavoritePlaylistsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserFavoritePlaylistsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserFavoritePlaylistsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserFavoritePlaylistsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserFavoritePlaylistsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userProfileId?: StringWithAggregatesFilter | undefined;
}
