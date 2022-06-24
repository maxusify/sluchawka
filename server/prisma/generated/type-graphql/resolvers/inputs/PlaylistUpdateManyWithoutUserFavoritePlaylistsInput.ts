import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyUserFavoritePlaylistsInputEnvelope } from "../inputs/PlaylistCreateManyUserFavoritePlaylistsInputEnvelope";
import { PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput";
import { PlaylistCreateWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistCreateWithoutUserFavoritePlaylistsInput";
import { PlaylistScalarWhereInput } from "../inputs/PlaylistScalarWhereInput";
import { PlaylistUpdateManyWithWhereWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistUpdateManyWithWhereWithoutUserFavoritePlaylistsInput";
import { PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput";
import { PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput } from "../inputs/PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateManyWithoutUserFavoritePlaylistsInput", {
  isAbstract: true
})
export class PlaylistUpdateManyWithoutUserFavoritePlaylistsInput {
  @TypeGraphQL.Field(_type => [PlaylistCreateWithoutUserFavoritePlaylistsInput], {
    nullable: true
  })
  create?: PlaylistCreateWithoutUserFavoritePlaylistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutUserFavoritePlaylistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput], {
    nullable: true
  })
  upsert?: PlaylistUpsertWithWhereUniqueWithoutUserFavoritePlaylistsInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateManyUserFavoritePlaylistsInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistCreateManyUserFavoritePlaylistsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  set?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  delete?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput], {
    nullable: true
  })
  update?: PlaylistUpdateWithWhereUniqueWithoutUserFavoritePlaylistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpdateManyWithWhereWithoutUserFavoritePlaylistsInput], {
    nullable: true
  })
  updateMany?: PlaylistUpdateManyWithWhereWithoutUserFavoritePlaylistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlaylistScalarWhereInput[] | undefined;
}
