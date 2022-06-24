import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyAuthorInputEnvelope } from "../inputs/PlaylistCreateManyAuthorInputEnvelope";
import { PlaylistCreateOrConnectWithoutAuthorInput } from "../inputs/PlaylistCreateOrConnectWithoutAuthorInput";
import { PlaylistCreateWithoutAuthorInput } from "../inputs/PlaylistCreateWithoutAuthorInput";
import { PlaylistScalarWhereInput } from "../inputs/PlaylistScalarWhereInput";
import { PlaylistUpdateManyWithWhereWithoutAuthorInput } from "../inputs/PlaylistUpdateManyWithWhereWithoutAuthorInput";
import { PlaylistUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/PlaylistUpdateWithWhereUniqueWithoutAuthorInput";
import { PlaylistUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/PlaylistUpsertWithWhereUniqueWithoutAuthorInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class PlaylistUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [PlaylistCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: PlaylistCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: PlaylistUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  set?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  delete?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: PlaylistUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: PlaylistUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlaylistScalarWhereInput[] | undefined;
}
