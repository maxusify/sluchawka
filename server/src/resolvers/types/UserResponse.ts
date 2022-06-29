import { Field, ObjectType } from "type-graphql";

import { User } from "../../../prisma/generated/type-graphql";

@ObjectType()
export class UserResponse {
  @Field((_) => User, { nullable: true })
  user?: User;

  @Field((_) => [FieldError], { nullable: true })
  errors?: FieldError[];
}

@ObjectType()
class FieldError {
  @Field((_) => String)
  field: string;

  @Field((_) => String)
  message: string;
}
