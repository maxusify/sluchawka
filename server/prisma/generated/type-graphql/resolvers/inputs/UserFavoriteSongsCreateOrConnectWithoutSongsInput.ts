import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsCreateWithoutSongsInput } from "../inputs/UserFavoriteSongsCreateWithoutSongsInput";
import { UserFavoriteSongsWhereUniqueInput } from "../inputs/UserFavoriteSongsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoriteSongsCreateOrConnectWithoutSongsInput", {
  isAbstract: true
})
export class UserFavoriteSongsCreateOrConnectWithoutSongsInput {
  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereUniqueInput, {
    nullable: false
  })
  where!: UserFavoriteSongsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateWithoutSongsInput, {
    nullable: false
  })
  create!: UserFavoriteSongsCreateWithoutSongsInput;
}
