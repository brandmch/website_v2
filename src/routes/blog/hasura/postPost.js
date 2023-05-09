import { fetchGraphQL } from "../../social/hasura/utils";

const operationsDoc = (title, text, time) => `
    mutation MyMutation {
      insert_blog_blog_posts(objects: {text: "${text}", time: "${time}", title: "${title}"}) {
        affected_rows
      }
    }
  `;

function executeMyMutation(title, text, time) {
  return fetchGraphQL(operationsDoc(title, text, time), "MyMutation", {});
}

export async function postPost(title, text, time) {
  const { errors, data } = await executeMyMutation(title, text, time);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
