import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOrderByRelationAggregateInput } from "../inputs/PlaylistOrderByRelationAggregateInput";
import { SongOrderByRelationAggregateInput } from "../inputs/SongOrderByRelationAggregateInput";
import { UserPostOrderByRelationAggregateInput } from "../inputs/UserPostOrderByRelationAggregateInput";
import { UserProfileCommentsOrderByRelationAggregateInput } from "../inputs/UserProfileCommentsOrderByRelationAggregateInput";
import { UserProfileOrderByWithRelationInput } from "../inputs/UserProfileOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  emailVerified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserProfileOrderByWithRelationInput, {
    nullable: true
  })
  profile?: UserProfileOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserPostOrderByRelationAggregateInput, {
    nullable: true
  })
  createdPosts?: UserPostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsOrderByRelationAggregateInput, {
    nullable: true
  })
  createdComments?: UserProfileCommentsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistOrderByRelationAggregateInput, {
    nullable: true
  })
  createdPlaylists?: PlaylistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongOrderByRelationAggregateInput, {
    nullable: true
  })
  createdSongs?: SongOrderByRelationAggregateInput | undefined;
}
