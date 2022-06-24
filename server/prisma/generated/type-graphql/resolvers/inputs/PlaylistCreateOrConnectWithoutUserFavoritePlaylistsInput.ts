import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistCreateWithoutUserFavoritePlaylistsInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput", {
  isAbstract: true
})
export class PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutUserFavoritePlaylistsInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutUserFavoritePlaylistsInput;
}
