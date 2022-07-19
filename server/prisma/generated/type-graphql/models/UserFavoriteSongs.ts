import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Song } from "../models/Song";
import { UserProfile } from "../models/UserProfile";
import { UserFavoriteSongsCount } from "../resolvers/outputs/UserFavoriteSongsCount";

@TypeGraphQL.ObjectType("UserFavoriteSongs", {
  isAbstract: true
})
export class UserFavoriteSongs {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userProfileId!: string;

  userProfile?: UserProfile;

  songs?: Song[];

  @TypeGraphQL.Field(_type => UserFavoriteSongsCount, {
    nullable: true
  })
  _count?: UserFavoriteSongsCount | null;
}
