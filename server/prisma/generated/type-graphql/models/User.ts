import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Playlist } from "../models/Playlist";
import { Song } from "../models/Song";
import { UserPost } from "../models/UserPost";
import { UserProfile } from "../models/UserProfile";
import { UserProfileComments } from "../models/UserProfileComments";
import { UserRole } from "../enums/UserRole";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  emailVerified!: boolean;

  password?: string;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: false
  })
  role!: "NORMAL" | "MODERATOR" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  picture?: string | null;

  createdPlaylists?: Playlist[];

  createdSongs?: Song[];

  createdPosts?: UserPost[];

  profile?: UserProfile | null;

  createdComments?: UserProfileComments[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
