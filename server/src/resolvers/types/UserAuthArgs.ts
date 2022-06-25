import { ArgsType, Field } from "type-graphql";
import { UserAuthInput } from "./UserAuthInput";

@ArgsType()
export class UserAuthArgs {
  @Field((_) => UserAuthInput, {
    nullable: false,
  })
  data!: UserAuthInput;
}
