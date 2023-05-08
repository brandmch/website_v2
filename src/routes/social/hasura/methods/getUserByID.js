import { fetchGraphQL } from "./fetchGraphQL";

const operationsDoc = (id) => `
    query MyQuery {
      social_Users(where: {id: {_eq: ${id}}}) {
        color
        darkMode
        email
        id
        name
        username
      }
    }
  `;

function fetchMyQuery(id) {
  return fetchGraphQL(operationsDoc(id), "MyQuery", {});
}

export async function getHasuraUserByID(id) {
  const { errors, data } = await fetchMyQuery(id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  if (data) {
    return data;
  }
}
