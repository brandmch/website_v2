import { fetchGraphQL } from "../../social/hasura/utils";

const operationsDoc = (t) => `
query MyQuery {
    blog_blog_posts(where: {time: {_eq: "${t}"}}) {
      text
      time
      title
      summary
      date
    }
  }
  
  `;

function fetchMyQuery(t) {
  return fetchGraphQL(operationsDoc(t), "MyQuery", {});
}

export async function getSinglePost(t) {
  const { errors, data } = await fetchMyQuery(t);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  if (data) {
    return data;
  }
}
