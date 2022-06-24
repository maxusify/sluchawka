import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutAuthorInput } from "../inputs/PlaylistCreateWithoutAuthorInput";
import { PlaylistUpdateWithoutAuthorInput } from "../inputs/PlaylistUpdateWithoutAuthorInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class PlaylistUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: PlaylistUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutAuthorInput;
}
