import { getCurrentUser } from "./methods/currentUser";
import { signUp } from "./methods/signup";
import { confirmSignUp } from "./methods/confirm";
import { signIn } from "./methods/login";
import { signOut } from "./methods/signout";
import { changePassword } from "./methods/changePassword";
import { deleteUser } from "./methods/deleteUser";
import { sparseError } from "./methods/sparseError";
import { resendConfirmationCode } from "./methods/resendConfirmationCode";

export {
  getCurrentUser,
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  changePassword,
  deleteUser,
  sparseError,
  resendConfirmationCode,
};
