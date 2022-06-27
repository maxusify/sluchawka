import { Field, InputType } from "type-graphql";

@InputType()
export class UserRecoverPasswordInput {
  @Field()
  token: string;

  @Field()
  newPassword: string;
}
