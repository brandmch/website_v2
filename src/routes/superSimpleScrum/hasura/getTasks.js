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

const operationsDoc = (taskids) => `
query getTasks {
  scrum_tasks(where: {id: {_in: [${taskids}]}}) {
    text
    id
  }
}

 `;

function fetchMyQuery(taskids) {
  return fetchGraphQL(operationsDoc(taskids), "getTasks", {});
}

export async function getTasks(taskids) {
  const { errors, data } = await fetchMyQuery(taskids);

  if (errors) {
    console.error(errors);
    return { error: -1 };
  }
  if (data) {
    return data.scrum_tasks;
  }
}
