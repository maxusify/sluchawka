import { User } from "prisma/generated/type-graphql";
import { UserAuthArgs } from "src/resolvers/types/UserAuthArgs";

export const validateRegister = (
  isUserExist: User | null,
  args: UserAuthArgs
) => {
  // Check if email already exists
  if (isUserExist !== null) {
    return [
      {
        field: "email",
        message: "Provided email address is already in use.",
      },
    ];
  }

  if (args.data.email.length <= 2) {
    // Check email length before register
    return [
      {
        field: "email",
        message: "Length must be greater than 2.",
      },
    ];
  }

  if (!args.data.email.includes("@")) {
    // Check if email contains @ symbol
    return [
      {
        field: "email",
        message: "Provided email is invalid.",
      },
    ];
  }

  if (args.data.password.length <= 7) {
    // Check password length before register
    return [
      {
        field: "password",
        message: "Password length must contain at least 8 characters.",
      },
    ];
  }

  return null;
};
