import { Auth } from "aws-amplify";

export async function signOut(setUser) {
  try {
    await Auth.signOut().then((x) => {
      setUser();
      window.location.href = "/social";
    });
  } catch (error) {
    console.log("error signing out: ", error);
  }
}
