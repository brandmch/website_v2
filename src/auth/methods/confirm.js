import { Auth } from "aws-amplify";
import { signIn, sparseError } from "../auth-methods";
import { startCreateUser } from "../../routes/social/hasura/methods/mutation";
import { createUser_simpleScrum } from "../../routes/superSimpleScrum/hasura/createUser";

export async function confirmSignUp(email, name, username, code, returnPage) {
  try {
    await Auth.confirmSignUp(username, code).then((x) => {
      if (x === "SUCCESS") {
        if (returnPage === "social") {
          startCreateUser(email, name, username)
            .then((x) => (window.location.href = `/login/${returnPage}`))
            .catch((e) => console.log(e));
        } else if (returnPage === "simpleScrum") {
          createUser_simpleScrum(email);
          // .then((x) => (window.location.href = `/login/${returnPage}`))
          // .catch((e) => console.log(e));
        }
      }
    });
  } catch (error) {
    console.log("error confirming sign up", error);
    return sparseError(error);
  }
}
