import { Auth } from "aws-amplify";
import { sparseError } from "./sparseError";

export async function signIn(
  { email: username, password },
  callbackURL = null
) {
  let result;
  try {
    const user = await Auth.signIn(username, password).then((x) => {
      if (x && callbackURL) {
        window.location.href = callbackURL;
      }
    });
  } catch (error) {
    console.log(error);
    return callbackURL ? sparseError(error) : error;
  }
  return sparseError(result);
}
