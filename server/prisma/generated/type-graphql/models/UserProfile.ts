import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { UserFavoritePlaylists } from "../models/UserFavoritePlaylists";
import { UserFavoriteSongs } from "../models/UserFavoriteSongs";
import { UserPost } from "../models/UserPost";
import { UserProfileComments } from "../models/UserProfileComments";
import { UserProfileCount } from "../resolvers/outputs/UserProfileCount";

@TypeGraphQL.ObjectType("UserProfile", {
  isAbstract: true
})
export class UserProfile {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;

  favPlaylists?: UserFavoritePlaylists | null;

  favSongs?: UserFavoriteSongs | null;

  posts?: UserPost[];

  comments?: UserProfileComments[];

  @TypeGraphQL.Field(_type => UserProfileCount, {
    nullable: true
  })
  _count?: UserProfileCount | null;
}
