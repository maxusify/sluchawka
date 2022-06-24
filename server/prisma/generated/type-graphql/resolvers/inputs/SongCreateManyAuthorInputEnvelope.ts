import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyAuthorInput } from "../inputs/SongCreateManyAuthorInput";

@TypeGraphQL.InputType("SongCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class SongCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [SongCreateManyAuthorInput], {
    nullable: false
  })
  data!: SongCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
