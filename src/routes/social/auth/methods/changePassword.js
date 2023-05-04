import { Auth } from "aws-amplify";

function changePassword(oldP, newP) {
  return Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, oldP, newP);
    })
    .then((data) => data)
    .catch((err) => console.log(err));
}

export { changePassword };
