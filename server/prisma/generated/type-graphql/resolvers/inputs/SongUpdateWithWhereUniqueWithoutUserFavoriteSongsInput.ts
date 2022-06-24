import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongUpdateWithoutUserFavoriteSongsInput } from "../inputs/SongUpdateWithoutUserFavoriteSongsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateWithWhereUniqueWithoutUserFavoriteSongsInput", {
  isAbstract: true
})
export class SongUpdateWithWhereUniqueWithoutUserFavoriteSongsInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutUserFavoriteSongsInput, {
    nullable: false
  })
  data!: SongUpdateWithoutUserFavoriteSongsInput;
}
