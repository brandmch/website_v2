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
query MyQuery {
    scrum_categories(
      where: {storyid: {_in: [${taskids}]}} 
      order_by: [{ storyid: asc }, { category: asc }]
    ) {
      tasks
      storyid
      id
      category
    }
  } 
 `;

function fetchMyQuery(taskids) {
  return fetchGraphQL(operationsDoc(taskids), "MyQuery", {});
}

export async function getTasks(taskids) {
  const { errors, data } = await fetchMyQuery(taskids);

  if (errors) {
    console.error(errors);
    return { error: -1 };
  }
  if (data) {
    return data.scrum_categories;
  }
}
