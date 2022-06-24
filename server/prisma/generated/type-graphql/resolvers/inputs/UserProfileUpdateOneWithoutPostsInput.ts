import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutPostsInput } from "../inputs/UserProfileCreateOrConnectWithoutPostsInput";
import { UserProfileCreateWithoutPostsInput } from "../inputs/UserProfileCreateWithoutPostsInput";
import { UserProfileUpdateWithoutPostsInput } from "../inputs/UserProfileUpdateWithoutPostsInput";
import { UserProfileUpsertWithoutPostsInput } from "../inputs/UserProfileUpsertWithoutPostsInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileUpdateOneWithoutPostsInput", {
  isAbstract: true
})
export class UserProfileUpdateOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutPostsInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: UserProfileUpsertWithoutPostsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: UserProfileUpdateWithoutPostsInput | undefined;
}
