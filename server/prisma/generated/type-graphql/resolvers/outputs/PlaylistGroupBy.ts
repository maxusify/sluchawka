import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCountAggregate } from "../outputs/PlaylistCountAggregate";
import { PlaylistMaxAggregate } from "../outputs/PlaylistMaxAggregate";
import { PlaylistMinAggregate } from "../outputs/PlaylistMinAggregate";

@TypeGraphQL.ObjectType("PlaylistGroupBy", {
  isAbstract: true
})
export class PlaylistGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userFavoritePlaylistsId!: string | null;

  @TypeGraphQL.Field(_type => PlaylistCountAggregate, {
    nullable: true
  })
  _count!: PlaylistCountAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistMinAggregate, {
    nullable: true
  })
  _min!: PlaylistMinAggregate | null;

  @TypeGraphQL.Field(_type => PlaylistMaxAggregate, {
    nullable: true
  })
  _max!: PlaylistMaxAggregate | null;
}
