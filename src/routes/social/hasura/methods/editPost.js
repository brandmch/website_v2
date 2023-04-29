/*
This is an example snippet - you should consider tailoring it
to your service.
*/

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

const operationsDoc = (text, id) => `
    mutation MyMutation {
      update_social_Posts(where: {id: {_eq: ${id}}}, _set: {text: "${text}"}) {
        affected_rows
      }
    }
  `;

function executeMyMutation(text, id) {
  return fetchGraphQL(operationsDoc(text, id), "MyMutation", {});
}

export async function editPost(text, id) {
  const { errors, data } = await executeMyMutation(text, id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
