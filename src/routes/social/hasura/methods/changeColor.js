import { fetchGraphQL } from "./fetchGraphQL";

const operationsDoc = (id, color) => `
  mutation MyMutation {
    update_social_Users(where: {id: {_eq: ${id}}}, _set: {color: "${color}"}) {
      affected_rows
    }
  }
`;

function executeMyMutation(id, color) {
  return fetchGraphQL(operationsDoc(id, color), "MyMutation", {});
}

export async function changeColorHasura(id, color) {
  const { errors, data } = await executeMyMutation(id, color);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
