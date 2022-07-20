import { User } from "prisma/generated/type-graphql";
import { UserAuthArgs } from "src/resolvers/types/UserAuthArgs";

export const validateRegister = (
  doesUserExist: User | null,
  args: UserAuthArgs
) => {
  // Check if email already exists
  if (doesUserExist !== null) {
    return [
      {
        field: "email",
        message: "Provided email address is already in use.",
      },
    ];
  }

  // Check email length before register
  if (args.data.email.length <= 2) {
    
    return [
      {
        field: "email",
        message: "Length must be greater than 2.",
      },
    ];
  }

  // Check if email contains @ symbol
  if (!args.data.email.includes("@")) {
    return [
      {
        field: "email",
        message: "Provided email is invalid.",
      },
    ];
  }

  // Check password length before register
  if (args.data.password.length <= 7) {
    return [
      {
        field: "password",
        message: "Password length must contain at least 8 characters.",
      },
    ];
  }

  return null;
};
