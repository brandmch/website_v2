import { Auth } from "aws-amplify";

export async function resendConfirmationCode(username) {
  try {
    await Auth.resendSignUp(username);
    console.log("code resent successfully");
  } catch (err) {
    console.log("error resending code: ", err);
  }
}
