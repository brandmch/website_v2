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

const operationsDoc = (userid, task) => {
  return `
  mutation MyMutation {
    insert_scrum_stories(objects: {doings: [], dones: [], tasks: [${task}], todos: [], userid: ${userid}}) {
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

async function executeMyMutation(userid, task) {
  return await fetchGraphQL(operationsDoc(userid, task), "MyMutation", {});
}

export async function createStory(userid, task) {
  console.log(userid, task);
  const { errors, data } = await executeMyMutation(userid, task);

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
