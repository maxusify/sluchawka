import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutFavSongsInput } from "../inputs/UserProfileCreateWithoutFavSongsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCreateOrConnectWithoutFavSongsInput", {
  isAbstract: true
})
export class UserProfileCreateOrConnectWithoutFavSongsInput {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutFavSongsInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutFavSongsInput;
}
