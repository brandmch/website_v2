import { Auth } from "aws-amplify";

const getCurrentUser = () => {
  return Auth.currentAuthenticatedUser({
    bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then((user) => user)
    .catch((err) => console.log(err));
};

export { getCurrentUser };
