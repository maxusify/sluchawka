import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPostAvgAggregate } from "../outputs/UserPostAvgAggregate";
import { UserPostCountAggregate } from "../outputs/UserPostCountAggregate";
import { UserPostMaxAggregate } from "../outputs/UserPostMaxAggregate";
import { UserPostMinAggregate } from "../outputs/UserPostMinAggregate";
import { UserPostSumAggregate } from "../outputs/UserPostSumAggregate";

@TypeGraphQL.ObjectType("AggregateUserPost", {
  isAbstract: true
})
export class AggregateUserPost {
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
