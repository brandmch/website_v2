async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(`${process.env.REACT_APP_HASURA_URL}`, {
    method: "POST",
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": `${process.env.REACT_APP_HASURA_ADMIN_SECRET}`,
    },
  });

  return await result.json();
}

const operationsDoc = (email) => `
    query MyQuery {
      social_Users(where: {email: {_eq: "${email}"}}) {
        email
        id
        name
        username
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
