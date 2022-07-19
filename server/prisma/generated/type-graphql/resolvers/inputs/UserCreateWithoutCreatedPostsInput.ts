import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateNestedManyWithoutAuthorInput } from "../inputs/PlaylistCreateNestedManyWithoutAuthorInput";
import { SongCreateNestedManyWithoutAuthorInput } from "../inputs/SongCreateNestedManyWithoutAuthorInput";
import { UserProfileCommentsCreateNestedManyWithoutAuthorInput } from "../inputs/UserProfileCommentsCreateNestedManyWithoutAuthorInput";
import { UserProfileCreateNestedOneWithoutUserInput } from "../inputs/UserProfileCreateNestedOneWithoutUserInput";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType("UserCreateWithoutCreatedPostsInput", {
  isAbstract: true
})
export class UserCreateWithoutCreatedPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  emailVerified?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  role?: "NORMAL" | "MODERATOR" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  picture?: string | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  createdPlaylists?: PlaylistCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  createdSongs?: SongCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  profile?: UserProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCommentsCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  createdComments?: UserProfileCommentsCreateNestedManyWithoutAuthorInput | undefined;
}
