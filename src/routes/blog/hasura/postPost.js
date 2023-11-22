import { fetchGraphQL } from "../../social/hasura/utils";
import monthNameParser from "../../../utils/monthNumToName";

const operationsDoc = (title, text, time, summary, date) => `
    mutation MyMutation {
      insert_blog_blog_posts(objects: {text: "${text}", time: "${time}", title: "${title}", summary: "${summary}", date: "${date}"}) {
        affected_rows
      }
    }
  `;

function executeMyMutation(title, text, time, summary, date) {
  return fetchGraphQL(
    operationsDoc(title, text, time, summary, date),
    "MyMutation",
    {}
  );
}

export async function postPost(title, text, time, summary) {
  let t = new Date(time);
  let x = `${monthNameParser(t.getMonth())} ${t.getDate()}, ${t.getFullYear()}`;

  const { errors, data } = await executeMyMutation(
    title,
    text,
    time,
    summary,
    x
  );

  if (errors) {
    return { success: false, data: errors };
  } else {
    return { success: true, data: data };
  }
}
