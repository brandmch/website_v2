import { fetchGraphQL } from "../../social/hasura/utils";

const operationsDoc = `
    query MyQuery {
      blog_blog_posts(order_by: {id: desc}) {
        summary
        time
        title
      }
    }
  `;

function fetchMyQuery() {
  return fetchGraphQL(operationsDoc, "MyQuery", {});
}

export async function getSummaries() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  if (data) {
    return data;
  }
}
