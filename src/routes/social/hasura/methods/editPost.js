import { fetchGraphQL } from "../utils";

const operationsDoc = (text, id) => `
    mutation MyMutation {
      update_social_Posts(where: {id: {_eq: ${id}}}, _set: {text: "${text}"}) {
        affected_rows
      }
    }
  `;

function executeMyMutation(text, id) {
  return fetchGraphQL(operationsDoc(text, id), "MyMutation", {});
}

export async function editPost(text, id) {
  const { errors, data } = await executeMyMutation(text, id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
