import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserFavoriteSongsCountAggregate } from "../outputs/UserFavoriteSongsCountAggregate";
import { UserFavoriteSongsMaxAggregate } from "../outputs/UserFavoriteSongsMaxAggregate";
import { UserFavoriteSongsMinAggregate } from "../outputs/UserFavoriteSongsMinAggregate";

@TypeGraphQL.ObjectType("UserFavoriteSongsGroupBy", {
  isAbstract: true
})
export class UserFavoriteSongsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userProfileId!: string;

  @TypeGraphQL.Field(_type => UserFavoriteSongsCountAggregate, {
    nullable: true
  })
  _count!: UserFavoriteSongsCountAggregate | null;

  @TypeGraphQL.Field(_type => UserFavoriteSongsMinAggregate, {
    nullable: true
  })
  _min!: UserFavoriteSongsMinAggregate | null;

  @TypeGraphQL.Field(_type => UserFavoriteSongsMaxAggregate, {
    nullable: true
  })
  _max!: UserFavoriteSongsMaxAggregate | null;
}
