import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsCreateOrConnectWithoutUserProfileInput } from "../inputs/UserFavoriteSongsCreateOrConnectWithoutUserProfileInput";
import { UserFavoriteSongsCreateWithoutUserProfileInput } from "../inputs/UserFavoriteSongsCreateWithoutUserProfileInput";
import { UserFavoriteSongsWhereUniqueInput } from "../inputs/UserFavoriteSongsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoriteSongsCreateNestedOneWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoriteSongsCreateNestedOneWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateWithoutUserProfileInput, {
    nullable: true
  })
  create?: UserFavoriteSongsCreateWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateOrConnectWithoutUserProfileInput, {
    nullable: true
  })
  connectOrCreate?: UserFavoriteSongsCreateOrConnectWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereUniqueInput, {
    nullable: true
  })
  connect?: UserFavoriteSongsWhereUniqueInput | undefined;
}
