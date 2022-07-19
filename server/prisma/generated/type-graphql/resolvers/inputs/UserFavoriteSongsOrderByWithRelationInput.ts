import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongOrderByRelationAggregateInput } from "../inputs/SongOrderByRelationAggregateInput";
import { UserProfileOrderByWithRelationInput } from "../inputs/UserProfileOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserFavoriteSongsOrderByWithRelationInput", {
  isAbstract: true
})
export class UserFavoriteSongsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userProfileId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserProfileOrderByWithRelationInput, {
    nullable: true
  })
  userProfile?: UserProfileOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SongOrderByRelationAggregateInput, {
    nullable: true
  })
  songs?: SongOrderByRelationAggregateInput | undefined;
}
