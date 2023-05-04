import { fetchGraphQL } from "../utils";

const operationsDoc = (x) => `
    query MyQuery {
      social_Posts(order_by: {time: desc}, limit: ${x}) {
        id
        text
        time
        Posts_User {
          id
          name
          username
        }
      }
    }
  `;

function fetchMyQuery(x) {
  return fetchGraphQL(operationsDoc(x), "MyQuery", {});
}

export async function getPosts(x) {
  const { errors, data } = await fetchMyQuery(x);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
    return { error: -1 };
  }

  // do something great with this precious data
  if (data) {
    const returnData = data.social_Posts.map((c) => {
      c.text = c.text
        .split("{{{{{n}}}}}")
        .map((c) => c.replace(/{{{{{doublequotes}}}}}/g, '"'));
      return c;
    });
    return returnData;
  }
}
