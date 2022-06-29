import { ArgsType, Field } from "type-graphql";

import { UserRecoverPasswordInput } from "./UserRecoverPasswordInput";

@ArgsType()
export class UserRecoverPasswordArgs {
  @Field((_) => UserRecoverPasswordInput, {
    nullable: false,
  })
  data!: UserRecoverPasswordInput;
}
