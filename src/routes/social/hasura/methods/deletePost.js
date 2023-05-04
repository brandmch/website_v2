import { fetchGraphQL } from "../utils";

const operationsDoc = (id) => `
    mutation MyMutation {
      delete_social_Posts(where: {id: {_eq: ${id}}}) {
        affected_rows
      }
    }
  `;

function executeMyMutation(id) {
  return fetchGraphQL(operationsDoc(id), "MyMutation", {});
}

export async function deletePost(id) {
  const { errors, data } = await executeMyMutation(id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
