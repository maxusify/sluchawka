import { Field, InputType } from "type-graphql";

@InputType()
export class UserAuthInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
