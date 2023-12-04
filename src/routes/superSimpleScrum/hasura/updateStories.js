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

const operationsDoc = (storyid, column, array) => {
  return `
    mutation updateStoryTasks {
        update_scrum_stories(where: {id: {_eq: ${storyid}}}, _set: {${column}: [${array}]}) {
          returning {
            doings
            dones
            id
            tasks
            todos
            userid
          }
        }
      }
      
          `;
};

async function executeMyMutation(storyid, column, array) {
  return await fetchGraphQL(
    operationsDoc(storyid, column, array),
    "updateStoryTasks",
    {}
  );
}

export async function updateStoryTasks(storyid, column, array) {
  const { errors, data } = await executeMyMutation(storyid, column, array);

  if (data) {
    return data;
  }

  if (errors) {
    // handle those errors like a pro
    console.error("err", errors);
  }

  // do something great with this precious data
  // console.log(data);
}
