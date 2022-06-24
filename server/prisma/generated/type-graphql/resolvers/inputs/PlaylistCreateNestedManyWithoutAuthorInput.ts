import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyAuthorInputEnvelope } from "../inputs/PlaylistCreateManyAuthorInputEnvelope";
import { PlaylistCreateOrConnectWithoutAuthorInput } from "../inputs/PlaylistCreateOrConnectWithoutAuthorInput";
import { PlaylistCreateWithoutAuthorInput } from "../inputs/PlaylistCreateWithoutAuthorInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class PlaylistCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [PlaylistCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: PlaylistCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput[] | undefined;
}
