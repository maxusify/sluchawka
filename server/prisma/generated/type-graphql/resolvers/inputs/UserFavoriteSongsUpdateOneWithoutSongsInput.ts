import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsCreateOrConnectWithoutSongsInput } from "../inputs/UserFavoriteSongsCreateOrConnectWithoutSongsInput";
import { UserFavoriteSongsCreateWithoutSongsInput } from "../inputs/UserFavoriteSongsCreateWithoutSongsInput";
import { UserFavoriteSongsUpdateWithoutSongsInput } from "../inputs/UserFavoriteSongsUpdateWithoutSongsInput";
import { UserFavoriteSongsUpsertWithoutSongsInput } from "../inputs/UserFavoriteSongsUpsertWithoutSongsInput";
import { UserFavoriteSongsWhereUniqueInput } from "../inputs/UserFavoriteSongsWhereUniqueInput";

@TypeGraphQL.InputType("UserFavoriteSongsUpdateOneWithoutSongsInput", {
  isAbstract: true
})
export class UserFavoriteSongsUpdateOneWithoutSongsInput {
  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateWithoutSongsInput, {
    nullable: true
  })
  create?: UserFavoriteSongsCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: UserFavoriteSongsCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserFavoriteSongsUpsertWithoutSongsInput, {
    nullable: true
  })
  upsert?: UserFavoriteSongsUpsertWithoutSongsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserFavoriteSongsUpdateWithoutSongsInput, {
    nullable: true
  })
  update?: UserFavoriteSongsUpdateWithoutSongsInput | undefined;
}
