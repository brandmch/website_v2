import { fetchGraphQL } from "../utils";

const operationsDoc = (email) => `
    query MyQuery {
      social_Users(where: {email: {_eq: "${email}"}}) {
        email
        id
        name
        username
        darkMode
        color
      }
    }
  `;

function fetchMyQuery(email) {
  return fetchGraphQL(operationsDoc(email), "MyQuery", {});
}

export async function getUserDataFromHasura(email) {
  const { errors, data } = await fetchMyQuery(email);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  if (data) {
    return data;
  }
}
