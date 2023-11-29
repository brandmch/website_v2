import { Auth } from "aws-amplify";
import { sparseError } from "./sparseError";

function changePassword(oldP, newP) {
  return Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, oldP, newP);
    })
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return sparseError(err);
    });
}

export { changePassword };
