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
