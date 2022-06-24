import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsCreateOrConnectWithoutSongsInput } from "../inputs/UserFavoriteSongsCreateOrConnectWithoutSongsInput";
import { UserFavoriteSongsCreateWithoutSongsInput } from "../inputs/UserFavoriteSongsCreateWithoutSongsInput";
import { UserFavoriteSongsWhereUniqueInput } from "../inputs/UserFavoriteSongsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoriteSongsCreateNestedOneWithoutSongsInput", {
  isAbstract: true
})
export class UserFavoriteSongsCreateNestedOneWithoutSongsInput {
  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateWithoutSongsInput, {
    nullable: true
  })
  create?: UserFavoriteSongsCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: UserFavoriteSongsCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereUniqueInput, {
    nullable: true
  })
  connect?: UserFavoriteSongsWhereUniqueInput | undefined;
}
