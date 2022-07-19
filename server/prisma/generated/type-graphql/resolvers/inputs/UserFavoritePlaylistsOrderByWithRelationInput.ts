import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOrderByRelationAggregateInput } from "../inputs/PlaylistOrderByRelationAggregateInput";
import { UserProfileOrderByWithRelationInput } from "../inputs/UserProfileOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserFavoritePlaylistsOrderByWithRelationInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => PlaylistOrderByRelationAggregateInput, {
    nullable: true
  })
  playlists?: PlaylistOrderByRelationAggregateInput | undefined;
}
