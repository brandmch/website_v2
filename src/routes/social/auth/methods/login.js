import { Auth } from "aws-amplify";

export async function signIn({ email: username, password }) {
  try {
    const user = await Auth.signIn(username, password).then((x) => {
      if (x) {
        window.location.href = "/social";
      }
    });
  } catch (error) {
    console.log("error signing in", error);
  }
}
