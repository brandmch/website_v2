import { Auth } from "aws-amplify";
import { signIn, sparseError } from "../utils";
import { startCreateUser } from "../../routes/social/hasura/methods/mutation";

export async function confirmSignUp(email, name, username, code) {
  try {
    await Auth.confirmSignUp(username, code).then((x) => {
      if (x === "SUCCESS") {
        startCreateUser(email, name, username)
          .then((x) => (window.location.href = "/social/login"))
          .catch((e) => console.log(e));
      }
    });
  } catch (error) {
    console.log("error confirming sign up", error);
    return sparseError(error);
  }
}
