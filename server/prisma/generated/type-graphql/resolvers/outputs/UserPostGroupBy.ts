import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostAvgAggregate } from "../outputs/UserPostAvgAggregate";
import { UserPostCountAggregate } from "../outputs/UserPostCountAggregate";
import { UserPostMaxAggregate } from "../outputs/UserPostMaxAggregate";
import { UserPostMinAggregate } from "../outputs/UserPostMinAggregate";
import { UserPostSumAggregate } from "../outputs/UserPostSumAggregate";

@TypeGraphQL.ObjectType("UserPostGroupBy", {
  isAbstract: true
})
export class UserPostGroupBy {
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
  title!: string;

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

  @TypeGraphQL.Field(_type => UserPostCountAggregate, {
    nullable: true
  })
  _count!: UserPostCountAggregate | null;

  @TypeGraphQL.Field(_type => UserPostAvgAggregate, {
    nullable: true
  })
  _avg!: UserPostAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserPostSumAggregate, {
    nullable: true
  })
  _sum!: UserPostSumAggregate | null;

  @TypeGraphQL.Field(_type => UserPostMinAggregate, {
    nullable: true
  })
  _min!: UserPostMinAggregate | null;

  @TypeGraphQL.Field(_type => UserPostMaxAggregate, {
    nullable: true
  })
  _max!: UserPostMaxAggregate | null;
}
