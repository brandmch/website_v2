import { fetchGraphQL } from "../utils";

const operationsDoc = (email, name, username) => {
  return `
    mutation MyMutation {
        insert_social_Users(objects: {email: "${email}", name: "${name}", username: "${username}"}) {
          affected_rows

        }
      }
    `;
};

function executeMyMutation(email, name, username) {
  return fetchGraphQL(operationsDoc(email, name, username), "MyMutation", {});
}

export async function startCreateUser(email, name, username) {
  const { errors, data } = await executeMyMutation(email, name, username);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  // console.log(data);
}
