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

const operationsDoc = (task) => {
  return `
    mutation addTasks {
        insert_scrum_tasks(objects: {text: "${task}"}) {
          returning {
            id
          }
        }
      }
        `;
};

async function executeMyMutation(task) {
  return await fetchGraphQL(operationsDoc(task), "addTasks", {});
}

export async function createTask(task) {
  console.log(task);
  const { errors, data } = await executeMyMutation(task);

  if (data) {
    return data.insert_scrum_tasks.returning[0].id;
  }

  if (errors) {
    // handle those errors like a pro
    console.error("err", errors);
  }

  // do something great with this precious data
  // console.log(data);
}
