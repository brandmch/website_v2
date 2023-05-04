import { fetchGraphQL } from "../utils";

const operationsDoc = (id, curr) => `
    mutation MyMutation {
      update_social_Users(where: {id: {_eq: ${id}}}, _set: {darkMode: ${
  curr === "true" ? false : true
}}) {
    returning {
        darkMode
        email
        id
        name
        username
      }
      }
    }
  `;

function executeMyMutation(id, curr) {
  return fetchGraphQL(operationsDoc(id, curr), "MyMutation", {});
}

export async function changeDarkMode(id, curr) {
  const { errors, data } = await executeMyMutation(id, curr);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data.update_social_Users.returning[0]);
}
