import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyUserFavoritePlaylistsInput } from "../inputs/PlaylistCreateManyUserFavoritePlaylistsInput";

@TypeGraphQL.InputType("PlaylistCreateManyUserFavoritePlaylistsInputEnvelope", {
  isAbstract: true
})
export class PlaylistCreateManyUserFavoritePlaylistsInputEnvelope {
  @TypeGraphQL.Field(_type => [PlaylistCreateManyUserFavoritePlaylistsInput], {
    nullable: false
  })
  data!: PlaylistCreateManyUserFavoritePlaylistsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
