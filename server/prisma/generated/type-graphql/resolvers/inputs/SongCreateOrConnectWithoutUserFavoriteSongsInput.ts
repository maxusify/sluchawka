import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutUserFavoriteSongsInput } from "../inputs/SongCreateWithoutUserFavoriteSongsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateOrConnectWithoutUserFavoriteSongsInput", {
  isAbstract: true
})
export class SongCreateOrConnectWithoutUserFavoriteSongsInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutUserFavoriteSongsInput, {
    nullable: false
  })
  create!: SongCreateWithoutUserFavoriteSongsInput;
}
