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
      insert_social_Posts(objects: {text: "${text}", user_id: ${id}}) {
        affected_rows
      }
    }
  `;

function executeMyMutation(text, id) {
  return fetchGraphQL(operationsDoc(text, id), "MyMutation", {});
}

export async function createPost(text, id) {
  const { errors, data } = await executeMyMutation(text, id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  if (data) {
    return 1;
  }
}
