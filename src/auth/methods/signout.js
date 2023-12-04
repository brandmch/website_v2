import { Auth } from "aws-amplify";

export async function signOut(returnPage = null) {
  try {
    await Auth.signOut().then((x) => {
      if (returnPage) {
        window.location.href = returnPage;
      }
    });
  } catch (error) {
    console.log("error signing out: ", error);
  }
}
