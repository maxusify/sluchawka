import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedManyWithoutUserFavoriteSongsInput } from "../inputs/SongCreateNestedManyWithoutUserFavoriteSongsInput";
import { UserProfileCreateNestedOneWithoutFavSongsInput } from "../inputs/UserProfileCreateNestedOneWithoutFavSongsInput";

@TypeGraphQL.InputType("UserFavoriteSongsCreateInput", {
  isAbstract: true
})
export class UserFavoriteSongsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutFavSongsInput, {
    nullable: false
  })
  userProfile!: UserProfileCreateNestedOneWithoutFavSongsInput;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutUserFavoriteSongsInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutUserFavoriteSongsInput | undefined;
}
