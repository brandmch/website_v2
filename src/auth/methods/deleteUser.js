import { Auth } from "aws-amplify";

export async function deleteUser() {
  try {
    const result = await Auth.deleteUser();
    return result;
  } catch (error) {
    console.log("Error deleting user", error);
  }
}
