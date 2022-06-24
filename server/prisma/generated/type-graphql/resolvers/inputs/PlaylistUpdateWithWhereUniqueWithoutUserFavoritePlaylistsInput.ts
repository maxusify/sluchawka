import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistUpdateWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistUpdateWithoutUserFavoritePlaylistsInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput", {
  isAbstract: true
})
export class PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutUserFavoritePlaylistsInput, {
    nullable: false
  })
  data!: PlaylistUpdateWithoutUserFavoritePlaylistsInput;
}
