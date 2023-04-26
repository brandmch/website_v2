import { Auth } from "aws-amplify";

export async function confirmSignUp({ username, code }) {
  try {
    await Auth.confirmSignUp(username, code).then((x) => {
      if (x === "SUCCESS") {
        window.location.href = "/social";
      }
    });
  } catch (error) {
    console.log("error confirming sign up", error);
  }
}
