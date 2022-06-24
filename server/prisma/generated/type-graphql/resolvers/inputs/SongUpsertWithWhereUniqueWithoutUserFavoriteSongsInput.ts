import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutUserFavoriteSongsInput } from "../inputs/SongCreateWithoutUserFavoriteSongsInput";
import { SongUpdateWithoutUserFavoriteSongsInput } from "../inputs/SongUpdateWithoutUserFavoriteSongsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpsertWithWhereUniqueWithoutUserFavoriteSongsInput", {
  isAbstract: true
})
export class SongUpsertWithWhereUniqueWithoutUserFavoriteSongsInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutUserFavoriteSongsInput, {
    nullable: false
  })
  update!: SongUpdateWithoutUserFavoriteSongsInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutUserFavoriteSongsInput, {
    nullable: false
  })
  create!: SongCreateWithoutUserFavoriteSongsInput;
}
