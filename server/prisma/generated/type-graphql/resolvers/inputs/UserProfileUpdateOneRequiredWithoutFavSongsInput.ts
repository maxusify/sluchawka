import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutFavSongsInput } from "../inputs/UserProfileCreateOrConnectWithoutFavSongsInput";
import { UserProfileCreateWithoutFavSongsInput } from "../inputs/UserProfileCreateWithoutFavSongsInput";
import { UserProfileUpdateWithoutFavSongsInput } from "../inputs/UserProfileUpdateWithoutFavSongsInput";
import { UserProfileUpsertWithoutFavSongsInput } from "../inputs/UserProfileUpsertWithoutFavSongsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileUpdateOneRequiredWithoutFavSongsInput", {
  isAbstract: true
})
export class UserProfileUpdateOneRequiredWithoutFavSongsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutFavSongsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutFavSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutFavSongsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutFavSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpsertWithoutFavSongsInput, {
    nullable: true
  })
  upsert?: UserProfileUpsertWithoutFavSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutFavSongsInput, {
    nullable: true
  })
  update?: UserProfileUpdateWithoutFavSongsInput | undefined;
}
