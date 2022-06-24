import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistCreateWithoutUserFavoritePlaylistsInput";
import { PlaylistUpdateWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistUpdateWithoutUserFavoritePlaylistsInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput", {
  isAbstract: true
})
export class PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutUserFavoritePlaylistsInput, {
    nullable: false
  })
  update!: PlaylistUpdateWithoutUserFavoritePlaylistsInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutUserFavoritePlaylistsInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutUserFavoritePlaylistsInput;
}
