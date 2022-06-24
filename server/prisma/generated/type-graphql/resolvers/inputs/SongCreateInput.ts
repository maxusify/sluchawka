import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCreatedSongsInput } from "../inputs/UserCreateNestedOneWithoutCreatedSongsInput";
import { UserFavoriteSongsCreateNestedOneWithoutSongsInput } from "../inputs/UserFavoriteSongsCreateNestedOneWithoutSongsInput";

@TypeGraphQL.InputType("SongCreateInput", {
  isAbstract: true
})
export class SongCreateInput {
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

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateNestedOneWithoutSongsInput, {
    nullable: true
  })
  UserFavoriteSongs?: UserFavoriteSongsCreateNestedOneWithoutSongsInput | undefined;
}
