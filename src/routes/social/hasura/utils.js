import { startCreateUser } from "./methods/mutation";
import { getUserDataFromHasura } from "./methods/query";
import { getPosts } from "./methods/getPosts";
import { createPost } from "./methods/createPost";
import { deletePost } from "./methods/deletePost";
import { editPost } from "./methods/editPost";

export {
  getUserDataFromHasura,
  startCreateUser,
  getPosts,
  createPost,
  deletePost,
  editPost,
};
