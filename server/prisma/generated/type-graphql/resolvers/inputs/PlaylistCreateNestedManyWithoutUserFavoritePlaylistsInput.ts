import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyUserFavoritePlaylistsInputEnvelope } from "../inputs/PlaylistCreateManyUserFavoritePlaylistsInputEnvelope";
import { PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput";
import { PlaylistCreateWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistCreateWithoutUserFavoritePlaylistsInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput", {
  isAbstract: true
})
export class PlaylistCreateNestedManyWithoutUserFavoritePlaylistsInput {
  @TypeGraphQL.Field(_type => [PlaylistCreateWithoutUserFavoritePlaylistsInput], {
    nullable: true
  })
  create?: PlaylistCreateWithoutUserFavoritePlaylistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateManyUserFavoritePlaylistsInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistCreateManyUserFavoritePlaylistsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput[] | undefined;
}
