import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedManyWithoutUserFavoriteSongsInput } from "../inputs/SongCreateNestedManyWithoutUserFavoriteSongsInput";

@TypeGraphQL.InputType("UserFavoriteSongsCreateWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoriteSongsCreateWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutUserFavoriteSongsInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutUserFavoriteSongsInput | undefined;
}
