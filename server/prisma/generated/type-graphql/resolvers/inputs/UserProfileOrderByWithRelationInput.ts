import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsOrderByWithRelationInput } from "../inputs/UserFavoritePlaylistsOrderByWithRelationInput";
import { UserFavoriteSongsOrderByWithRelationInput } from "../inputs/UserFavoriteSongsOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { UserPostOrderByRelationAggregateInput } from "../inputs/UserPostOrderByRelationAggregateInput";
import { UserProfileCommentsOrderByRelationAggregateInput } from "../inputs/UserProfileCommentsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserProfileOrderByWithRelationInput", {
  isAbstract: true
})
export class UserProfileOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsOrderByWithRelationInput, {
    nullable: true
  })
  favSongs?: UserFavoriteSongsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsOrderByWithRelationInput, {
    nullable: true
  })
  favPlaylists?: UserFavoritePlaylistsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserPostOrderByRelationAggregateInput, {
    nullable: true
  })
  posts?: UserPostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsOrderByRelationAggregateInput, {
    nullable: true
  })
  comments?: UserProfileCommentsOrderByRelationAggregateInput | undefined;
}
