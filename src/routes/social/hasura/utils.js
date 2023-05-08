import { startCreateUser } from "./methods/mutation";
import { getUserDataFromHasura } from "./methods/getUser";
import { getPosts } from "./methods/getPosts";
import { createPost } from "./methods/createPost";
import { deletePost } from "./methods/deletePost";
import { editPost } from "./methods/editPost";
import { sparsePost } from "./methods/sparsePost";
import { changeDarkMode } from "./methods/darkMode";
import { fetchGraphQL } from "./methods/fetchGraphQL";
import { deleteUser_UserAndPosts } from "./methods/deleteUser";
import { getHasuraUserByID } from "./methods/getUserByID";
import { changeColorHasura } from "./methods/changeColor";

export {
  getUserDataFromHasura,
  startCreateUser,
  getPosts,
  createPost,
  deletePost,
  editPost,
  sparsePost,
  changeDarkMode,
  fetchGraphQL,
  deleteUser_UserAndPosts,
  getHasuraUserByID,
  changeColorHasura,
};
