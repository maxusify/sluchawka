import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutCommentsInput } from "../inputs/UserProfileCreateOrConnectWithoutCommentsInput";
import { UserProfileCreateWithoutCommentsInput } from "../inputs/UserProfileCreateWithoutCommentsInput";
import { UserProfileUpdateWithoutCommentsInput } from "../inputs/UserProfileUpdateWithoutCommentsInput";
import { UserProfileUpsertWithoutCommentsInput } from "../inputs/UserProfileUpsertWithoutCommentsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileUpdateOneWithoutCommentsInput", {
  isAbstract: true
})
export class UserProfileUpdateOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: UserProfileUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: UserProfileUpdateWithoutCommentsInput | undefined;
}
