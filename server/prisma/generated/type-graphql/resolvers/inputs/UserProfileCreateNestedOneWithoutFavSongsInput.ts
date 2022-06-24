import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutFavSongsInput } from "../inputs/UserProfileCreateOrConnectWithoutFavSongsInput";
import { UserProfileCreateWithoutFavSongsInput } from "../inputs/UserProfileCreateWithoutFavSongsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCreateNestedOneWithoutFavSongsInput", {
  isAbstract: true
})
export class UserProfileCreateNestedOneWithoutFavSongsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutFavSongsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutFavSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutFavSongsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutFavSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;
}
