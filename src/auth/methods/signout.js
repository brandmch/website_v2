import { Auth } from "aws-amplify";

export async function signOut() {
  try {
    await Auth.signOut().then((x) => {
      window.location.href = "/login";
    });
  } catch (error) {
    console.log("error signing out: ", error);
  }
}
