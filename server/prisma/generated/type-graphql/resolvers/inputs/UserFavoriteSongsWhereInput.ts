import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongListRelationFilter } from "../inputs/SongListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserProfileRelationFilter } from "../inputs/UserProfileRelationFilter";

@TypeGraphQL.InputType("UserFavoriteSongsWhereInput", {
  isAbstract: true
})
export class UserFavoriteSongsWhereInput {
  @TypeGraphQL.Field(_type => [UserFavoriteSongsWhereInput], {
    nullable: true
  })
  AND?: UserFavoriteSongsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserFavoriteSongsWhereInput], {
    nullable: true
  })
  OR?: UserFavoriteSongsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserFavoriteSongsWhereInput], {
    nullable: true
  })
  NOT?: UserFavoriteSongsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userProfileId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserProfileRelationFilter, {
    nullable: true
  })
  userProfile?: UserProfileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongListRelationFilter, {
    nullable: true
  })
  songs?: SongListRelationFilter | undefined;
}
