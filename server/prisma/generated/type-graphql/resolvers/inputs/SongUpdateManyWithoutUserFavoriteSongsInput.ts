import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyUserFavoriteSongsInputEnvelope } from "../inputs/SongCreateManyUserFavoriteSongsInputEnvelope";
import { SongCreateOrConnectWithoutUserFavoriteSongsInput } from "../inputs/SongCreateOrConnectWithoutUserFavoriteSongsInput";
import { SongCreateWithoutUserFavoriteSongsInput } from "../inputs/SongCreateWithoutUserFavoriteSongsInput";
import { SongScalarWhereInput } from "../inputs/SongScalarWhereInput";
import { SongUpdateManyWithWhereWithoutUserFavoriteSongsInput } from "../inputs/SongUpdateManyWithWhereWithoutUserFavoriteSongsInput";
import { SongUpdateWithWhereUniqueWithoutUserFavoriteSongsInput } from "../inputs/SongUpdateWithWhereUniqueWithoutUserFavoriteSongsInput";
import { SongUpsertWithWhereUniqueWithoutUserFavoriteSongsInput } from "../inputs/SongUpsertWithWhereUniqueWithoutUserFavoriteSongsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateManyWithoutUserFavoriteSongsInput", {
  isAbstract: true
})
export class SongUpdateManyWithoutUserFavoriteSongsInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutUserFavoriteSongsInput], {
    nullable: true
  })
  create?: SongCreateWithoutUserFavoriteSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutUserFavoriteSongsInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutUserFavoriteSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpsertWithWhereUniqueWithoutUserFavoriteSongsInput], {
    nullable: true
  })
  upsert?: SongUpsertWithWhereUniqueWithoutUserFavoriteSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyUserFavoriteSongsInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyUserFavoriteSongsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  set?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  delete?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateWithWhereUniqueWithoutUserFavoriteSongsInput], {
    nullable: true
  })
  update?: SongUpdateWithWhereUniqueWithoutUserFavoriteSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateManyWithWhereWithoutUserFavoriteSongsInput], {
    nullable: true
  })
  updateMany?: SongUpdateManyWithWhereWithoutUserFavoriteSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongScalarWhereInput[] | undefined;
}
