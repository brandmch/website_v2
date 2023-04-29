/*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch("undefined", {
    method: "POST",
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

const operationsDoc = `
    mutation MyMutation {
      update_social_Posts(where: {id: {_eq: 10}}) {
        affected_rows
      }
    }
  `;

function executeMyMutation() {
  return fetchGraphQL(operationsDoc, "MyMutation", {});
}

export async function editPost() {
  const { errors, data } = await executeMyMutation();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
