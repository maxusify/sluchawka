import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistScalarWhereInput } from "../inputs/PlaylistScalarWhereInput";
import { PlaylistUpdateManyMutationInput } from "../inputs/PlaylistUpdateManyMutationInput";

@TypeGraphQL.InputType("PlaylistUpdateManyWithWhereWithoutAuthorInput", {
  isAbstract: true
})
export class PlaylistUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PlaylistScalarWhereInput, {
    nullable: false
  })
  where!: PlaylistScalarWhereInput;

  @TypeGraphQL.Field(_type => PlaylistUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlaylistUpdateManyMutationInput;
}
