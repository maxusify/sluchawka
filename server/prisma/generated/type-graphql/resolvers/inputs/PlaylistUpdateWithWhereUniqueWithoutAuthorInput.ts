import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistUpdateWithoutAuthorInput } from "../inputs/PlaylistUpdateWithoutAuthorInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class PlaylistUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: PlaylistUpdateWithoutAuthorInput;
}
