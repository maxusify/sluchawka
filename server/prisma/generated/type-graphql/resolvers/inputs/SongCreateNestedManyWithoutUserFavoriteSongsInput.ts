import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyUserFavoriteSongsInputEnvelope } from "../inputs/SongCreateManyUserFavoriteSongsInputEnvelope";
import { SongCreateOrConnectWithoutUserFavoriteSongsInput } from "../inputs/SongCreateOrConnectWithoutUserFavoriteSongsInput";
import { SongCreateWithoutUserFavoriteSongsInput } from "../inputs/SongCreateWithoutUserFavoriteSongsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateNestedManyWithoutUserFavoriteSongsInput", {
  isAbstract: true
})
export class SongCreateNestedManyWithoutUserFavoriteSongsInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutUserFavoriteSongsInput], {
    nullable: true
  })
  create?: SongCreateWithoutUserFavoriteSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutUserFavoriteSongsInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutUserFavoriteSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyUserFavoriteSongsInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyUserFavoriteSongsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;
}
