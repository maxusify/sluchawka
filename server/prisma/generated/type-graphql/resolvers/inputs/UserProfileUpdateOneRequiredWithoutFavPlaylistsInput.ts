import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutFavPlaylistsInput } from "../inputs/UserProfileCreateOrConnectWithoutFavPlaylistsInput";
import { UserProfileCreateWithoutFavPlaylistsInput } from "../inputs/UserProfileCreateWithoutFavPlaylistsInput";
import { UserProfileUpdateWithoutFavPlaylistsInput } from "../inputs/UserProfileUpdateWithoutFavPlaylistsInput";
import { UserProfileUpsertWithoutFavPlaylistsInput } from "../inputs/UserProfileUpsertWithoutFavPlaylistsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileUpdateOneRequiredWithoutFavPlaylistsInput", {
  isAbstract: true
})
export class UserProfileUpdateOneRequiredWithoutFavPlaylistsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutFavPlaylistsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutFavPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutFavPlaylistsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutFavPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpsertWithoutFavPlaylistsInput, {
    nullable: true
  })
  upsert?: UserProfileUpsertWithoutFavPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutFavPlaylistsInput, {
    nullable: true
  })
  update?: UserProfileUpdateWithoutFavPlaylistsInput | undefined;
}
