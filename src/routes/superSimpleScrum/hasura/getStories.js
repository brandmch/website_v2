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

const operationsDoc = (userid) => `
query getStories {
  scrum_stories(where: {userid: {_eq: ${userid}}}) {
    todos
    tasks
    id
    dones
    doings
    userid
  }
}

      `;

function fetchMyQuery(userid) {
  return fetchGraphQL(operationsDoc(userid), "getStories", {});
}

export async function getStories(userid) {
  const { errors, data } = await fetchMyQuery(userid);

  if (errors) {
    console.error(errors);
    return { error: -1 };
  }
  if (data) {
    return data.scrum_stories;
  }
}