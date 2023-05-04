import { fetchGraphQL } from "./fetchGraphQL";

const operationsDoc = (id) => `
    mutation deleteUser_User {
      delete_social_Users(where: {id: {_eq: ${id}}}) {
        affected_rows
      }
    }
    
    mutation deleteUser_Posts {
      update_social_Posts(where: {Posts_User: {id: {_eq: ${id}}}}, _set: {user_id: 7}) {
        returning {
          id
          text
          time
          user_id
        }
      }
    }
  `;

function executeDeleteUser_User(id) {
  return fetchGraphQL(operationsDoc(id), "deleteUser_User", {});
}

function executeDeleteUser_Posts(id) {
  return fetchGraphQL(operationsDoc(id), "deleteUser_Posts", {});
}

async function startExecuteDeleteUser_User(id) {
  const { errors, data } = await executeDeleteUser_User(id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log("delete user:", data);
  window.location.href = `/social`;
}

async function startExecuteDeleteUser_Posts(id) {
  const { errors, data } = await executeDeleteUser_Posts(id);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log("delete posts:", data);
}

export async function deleteUser_UserAndPosts(id) {
  startExecuteDeleteUser_Posts(id).then((x) => startExecuteDeleteUser_User(id));
}
