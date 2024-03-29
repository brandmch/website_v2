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

const operationsDoc = `
  query MyQuery {
    MinesweeperScores {
      difficulty
      id
      name
      score
    }
  }
`;

function fetchMyQuery() {
  return fetchGraphQL(operationsDoc, "MyQuery", {});
}

async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  return data;
}

export function getScores(setState) {
  startFetchMyQuery()
    .then((x) =>
      x.MinesweeperScores.reduce(
        (a, c) => {
          let tempObj = { ...a };
          tempObj[c.difficulty].push(c);
          return tempObj;
        },
        { PRACTICE: [], EASY: [], MEDIUM: [], HARD: [], IMPOSSIBLE: [] }
      )
    )
    .then((x) => {
      let t = { ...x };
      for (let i in t) {
        t[i] = t[i].sort((a, b) => a.score - b.score).filter((c, i) => i < 10);
      }
      return t;
    })
    .then((x) => setState(x));
}
