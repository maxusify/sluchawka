import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyAuthorInputEnvelope } from "../inputs/SongCreateManyAuthorInputEnvelope";
import { SongCreateOrConnectWithoutAuthorInput } from "../inputs/SongCreateOrConnectWithoutAuthorInput";
import { SongCreateWithoutAuthorInput } from "../inputs/SongCreateWithoutAuthorInput";
import { SongScalarWhereInput } from "../inputs/SongScalarWhereInput";
import { SongUpdateManyWithWhereWithoutAuthorInput } from "../inputs/SongUpdateManyWithWhereWithoutAuthorInput";
import { SongUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/SongUpdateWithWhereUniqueWithoutAuthorInput";
import { SongUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/SongUpsertWithWhereUniqueWithoutAuthorInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class SongUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: SongCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: SongUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  set?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  delete?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: SongUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: SongUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongScalarWhereInput[] | undefined;
}
