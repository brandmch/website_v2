import { Auth } from "aws-amplify";

export async function signOut(callbackURL = null) {
  try {
    await Auth.signOut().then((x) => {
      if (callbackURL) {
        window.location.href = callbackURL;
      }
    });
  } catch (error) {
    console.log("error signing out: ", error);
  }
}
