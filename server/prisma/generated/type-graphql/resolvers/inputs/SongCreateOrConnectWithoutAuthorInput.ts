import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutAuthorInput } from "../inputs/SongCreateWithoutAuthorInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class SongCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: SongCreateWithoutAuthorInput;
}
