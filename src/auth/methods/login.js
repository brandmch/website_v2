import { Auth } from "aws-amplify";
import { sparseError } from "./sparseError";

export async function signIn({ email: username, password }) {
  let result;
  try {
    const user = await Auth.signIn(username, password).then((x) => {
      if (x) {
        window.location.href = "/social";
      }
    });
  } catch (error) {
    console.log(error);
    return sparseError(error);
  }
  return sparseError(result);
}
