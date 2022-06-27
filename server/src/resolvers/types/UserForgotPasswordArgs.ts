import { ArgsType, Field } from "type-graphql";
import { UserForgotPasswordInput } from "./UserForgotPasswordInput";

@ArgsType()
export class UserForgotPasswordArgs {
  @Field((_) => UserForgotPasswordInput, {
    nullable: false,
  })
  data!: UserForgotPasswordInput;
}
