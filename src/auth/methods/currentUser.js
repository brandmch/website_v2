import { Auth } from "aws-amplify";

export async function getCurrentUser() {
  try {
    const currentUser = await Auth.currentAuthenticatedUser({
      bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    });
    return currentUser;
  } catch (error) {
    console.log("error signing out: ", error);
    return error;
  }
}
