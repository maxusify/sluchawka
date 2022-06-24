import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput";
import { UserFavoritePlaylistsCreateWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsCreateWithoutUserProfileInput";
import { UserFavoritePlaylistsUpdateWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsUpdateWithoutUserProfileInput";
import { UserFavoritePlaylistsUpsertWithoutUserProfileInput } from "../inputs/UserFavoritePlaylistsUpsertWithoutUserProfileInput";
import { UserFavoritePlaylistsWhereUniqueInput } from "../inputs/UserFavoritePlaylistsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoritePlaylistsUpdateOneWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoritePlaylistsUpdateOneWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateWithoutUserProfileInput, {
    nullable: true
  })
  create?: UserFavoritePlaylistsCreateWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput, {
    nullable: true
  })
  connectOrCreate?: UserFavoritePlaylistsCreateOrConnectWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpsertWithoutUserProfileInput, {
    nullable: true
  })
  upsert?: UserFavoritePlaylistsUpsertWithoutUserProfileInput | undefined;

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

  @TypeGraphQL.Field(_type => UserFavoritePlaylistsUpdateWithoutUserProfileInput, {
    nullable: true
  })
  update?: UserFavoritePlaylistsUpdateWithoutUserProfileInput | undefined;
}
