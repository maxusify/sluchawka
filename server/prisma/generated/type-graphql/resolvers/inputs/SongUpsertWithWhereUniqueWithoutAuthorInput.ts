import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutAuthorInput } from "../inputs/SongCreateWithoutAuthorInput";
import { SongUpdateWithoutAuthorInput } from "../inputs/SongUpdateWithoutAuthorInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class SongUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: SongUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: SongCreateWithoutAuthorInput;
}
