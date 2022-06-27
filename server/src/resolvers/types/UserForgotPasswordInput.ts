import { Field, InputType } from "type-graphql";

@InputType()
export class UserForgotPasswordInput {
  @Field()
  email: string;
}
