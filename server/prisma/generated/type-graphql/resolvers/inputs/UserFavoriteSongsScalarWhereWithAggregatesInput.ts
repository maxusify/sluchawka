import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserFavoriteSongsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserFavoriteSongsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserFavoriteSongsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserFavoriteSongsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserFavoriteSongsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserFavoriteSongsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserFavoriteSongsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserFavoriteSongsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userProfileId?: StringWithAggregatesFilter | undefined;
}
