import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCreatedSongsInput } from "../inputs/UserCreateNestedOneWithoutCreatedSongsInput";

@TypeGraphQL.InputType("SongCreateWithoutUserFavoriteSongsInput", {
  isAbstract: true
})
export class SongCreateWithoutUserFavoriteSongsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatedSongsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutCreatedSongsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
