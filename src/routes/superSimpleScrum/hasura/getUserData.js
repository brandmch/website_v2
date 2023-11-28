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
    scrum_users(where: {email: {_eq: "${email}"}}) {
      email
      id
    }
  }
    `;

function fetchMyQuery(email) {
  return fetchGraphQL(operationsDoc(email), "MyQuery", {});
}

export async function getUsers(email) {
  const { errors, data } = await fetchMyQuery(email);

  if (errors) {
    console.error(errors);
    return { error: -1 };
  }
  if (data) {
    return data.scrum_users[0];
  }
}
