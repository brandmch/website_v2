import { fetchGraphQL } from "../utils";

const operationsDoc = (text, id) => `
    mutation MyMutation {
      insert_social_Posts(objects: {text: "${text}", user_id: ${id}}) {
        affected_rows
      }
    }
  `;

function executeMyMutation(text, id) {
  return fetchGraphQL(operationsDoc(text, id), "MyMutation", {});
}

export async function createPost(text, id) {
  const { errors, data } = await executeMyMutation(text, id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  if (data) {
    return 1;
  }
}
