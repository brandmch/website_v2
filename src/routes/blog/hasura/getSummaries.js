import { fetchGraphQL } from "../../social/hasura/utils";

const operationsDoc = (x, y) => `
    query MyQuery {
      blog_blog_posts(order_by: {id: desc}, limit: ${x}, offset: ${y}) {
        summary
        time
        title
        date
      }
    }
  `;

function fetchMyQuery(x, y) {
  return fetchGraphQL(operationsDoc(x, y), "MyQuery", {});
}

export async function getSummaries(x, y) {
  const { errors, data } = await fetchMyQuery(x, y);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  if (data) {
    return data;
  }
}
