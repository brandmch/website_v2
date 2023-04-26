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

const operationsDoc = (name, difficulty, score) => {
  return `
    mutation MyMutation {
      insert_MinesweeperScores(objects: {difficulty: "${difficulty}", name: "${name}", score: "${score}"}) {
        affected_rows
        returning {
          difficulty
          id
          name
          score
        }
      }
    }
  `;
};

function executeMyMutation(name, difficulty, score) {
  return fetchGraphQL(operationsDoc(name, difficulty, score), "MyMutation", {});
}

export async function startExecuteMyMutation(name, difficulty, score) {
  const { errors, data } = await executeMyMutation(name, difficulty, score);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
