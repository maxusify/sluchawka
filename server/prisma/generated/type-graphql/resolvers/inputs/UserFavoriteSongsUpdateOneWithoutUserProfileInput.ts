import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsCreateOrConnectWithoutUserProfileInput } from "../inputs/UserFavoriteSongsCreateOrConnectWithoutUserProfileInput";
import { UserFavoriteSongsCreateWithoutUserProfileInput } from "../inputs/UserFavoriteSongsCreateWithoutUserProfileInput";
import { UserFavoriteSongsUpdateWithoutUserProfileInput } from "../inputs/UserFavoriteSongsUpdateWithoutUserProfileInput";
import { UserFavoriteSongsUpsertWithoutUserProfileInput } from "../inputs/UserFavoriteSongsUpsertWithoutUserProfileInput";
import { UserFavoriteSongsWhereUniqueInput } from "../inputs/UserFavoriteSongsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoriteSongsUpdateOneWithoutUserProfileInput", {
  isAbstract: true
})
export class UserFavoriteSongsUpdateOneWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateWithoutUserProfileInput, {
    nullable: true
  })
  create?: UserFavoriteSongsCreateWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateOrConnectWithoutUserProfileInput, {
    nullable: true
  })
  connectOrCreate?: UserFavoriteSongsCreateOrConnectWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsUpsertWithoutUserProfileInput, {
    nullable: true
  })
  upsert?: UserFavoriteSongsUpsertWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsWhereUniqueInput, {
    nullable: true
  })
  connect?: UserFavoriteSongsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsUpdateWithoutUserProfileInput, {
    nullable: true
  })
  update?: UserFavoriteSongsUpdateWithoutUserProfileInput | undefined;
}
