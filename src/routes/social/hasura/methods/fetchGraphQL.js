export async function fetchGraphQL(operationsDoc, operationName, variables) {
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
