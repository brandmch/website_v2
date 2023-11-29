import { Auth } from "aws-amplify";
import { sparseError } from "./sparseError";

export async function signUp({ email, password, username }) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        // phone_number, // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return sparseError(error);
  }
}
