import { fetchGraphQL } from "../../social/hasura/utils";

const operationsDoc = (title, text, time, summary) => `
    mutation MyMutation {
      insert_blog_blog_posts(objects: {text: "${text}", time: "${time}", title: "${title}", summary: "${summary}"}) {
        affected_rows
      }
    }
  `;

function executeMyMutation(title, text, time, summary) {
  return fetchGraphQL(
    operationsDoc(title, text, time, summary),
    "MyMutation",
    {}
  );
}

export async function postPost(title, text, time, summary) {
  const { errors, data } = await executeMyMutation(title, text, time, summary);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
