import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyAuthorInputEnvelope } from "../inputs/SongCreateManyAuthorInputEnvelope";
import { SongCreateOrConnectWithoutAuthorInput } from "../inputs/SongCreateOrConnectWithoutAuthorInput";
import { SongCreateWithoutAuthorInput } from "../inputs/SongCreateWithoutAuthorInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class SongCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: SongCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;
}
