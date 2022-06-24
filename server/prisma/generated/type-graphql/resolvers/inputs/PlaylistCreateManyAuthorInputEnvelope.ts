import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyAuthorInput } from "../inputs/PlaylistCreateManyAuthorInput";

@TypeGraphQL.InputType("PlaylistCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class PlaylistCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [PlaylistCreateManyAuthorInput], {
    nullable: false
  })
  data!: PlaylistCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
