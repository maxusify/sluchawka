import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongUpdateWithoutAuthorInput } from "../inputs/SongUpdateWithoutAuthorInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class SongUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: SongUpdateWithoutAuthorInput;
}
