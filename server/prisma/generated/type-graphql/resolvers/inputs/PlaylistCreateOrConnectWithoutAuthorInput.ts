import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutAuthorInput } from "../inputs/PlaylistCreateWithoutAuthorInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class PlaylistCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutAuthorInput;
}
