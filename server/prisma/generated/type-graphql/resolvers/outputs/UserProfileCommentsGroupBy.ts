import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCommentsAvgAggregate } from "../outputs/UserProfileCommentsAvgAggregate";
import { UserProfileCommentsCountAggregate } from "../outputs/UserProfileCommentsCountAggregate";
import { UserProfileCommentsMaxAggregate } from "../outputs/UserProfileCommentsMaxAggregate";
import { UserProfileCommentsMinAggregate } from "../outputs/UserProfileCommentsMinAggregate";
import { UserProfileCommentsSumAggregate } from "../outputs/UserProfileCommentsSumAggregate";

@TypeGraphQL.ObjectType("UserProfileCommentsGroupBy", {
  isAbstract: true
})
export class UserProfileCommentsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userProfileId!: string | null;

  @TypeGraphQL.Field(_type => UserProfileCommentsCountAggregate, {
    nullable: true
  })
  _count!: UserProfileCommentsCountAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileCommentsAvgAggregate, {
    nullable: true
  })
  _avg!: UserProfileCommentsAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileCommentsSumAggregate, {
    nullable: true
  })
  _sum!: UserProfileCommentsSumAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileCommentsMinAggregate, {
    nullable: true
  })
  _min!: UserProfileCommentsMinAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileCommentsMaxAggregate, {
    nullable: true
  })
  _max!: UserProfileCommentsMaxAggregate | null;
}
