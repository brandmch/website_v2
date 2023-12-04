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

const operationsDoc = (email) => {
  return `
  mutation MyMutation {
    insert_scrum_users(objects: {email: "${email}"}) {
      returning {
        email
        id
      }
    }
  }
  
    `;
};

async function executeMyMutation(email) {
  return await fetchGraphQL(operationsDoc(email), "MyMutation", {});
}

export async function createUser_simpleScrum(email) {
  const { errors, data } = await executeMyMutation(email);

  if (data) {
    console.log("Data", data);
    const { insert_scrum_users } = data;
    console.log("insert_scrum_users", insert_scrum_users);
    const { email, id } = insert_scrum_users.returning[0];
    console.log("email, id", email, id);
  }

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  // console.log(data);
}
