import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput";
import { UserFavoritePlaylistsCreateWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsCreateWithoutPlaylistsInput";
import { UserFavoritePlaylistsUpdateWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsUpdateWithoutPlaylistsInput";
import { UserFavoritePlaylistsUpsertWithoutPlaylistsInput } from "../inputs/UserFavoritePlaylistsUpsertWithoutPlaylistsInput";
import { UserFavoritePlaylistsWhereUniqueInput } from "../inputs/UserFavoritePlaylistsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsUpdateOneWithoutPlaylistsInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsUpdateOneWithoutPlaylistsInput {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateWithoutPlaylistsInput, {
    nullable: true
  })
  create?: UserFavoritePlaylistsCreateWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput, {
    nullable: true
  })
  connectOrCreate?: UserFavoritePlaylistsCreateOrConnectWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpsertWithoutPlaylistsInput, {
    nullable: true
  })
  upsert?: UserFavoritePlaylistsUpsertWithoutPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsWhereUniqueInput, {
    nullable: true
  })
  connect?: UserFavoritePlaylistsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpdateWithoutPlaylistsInput, {
    nullable: true
  })
  update?: UserFavoritePlaylistsUpdateWithoutPlaylistsInput | undefined;
}
