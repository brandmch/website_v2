import { startCreateUser } from "./methods/mutation";
import { getUserDataFromHasura } from "./methods/query";
import { getPosts } from "./methods/getPosts";
import { createPost } from "./methods/createPost";
import { deletePost } from "./methods/deletePost";
import { editPost } from "./methods/editPost";
import { sparsePost } from "./methods/sparsePost";

export {
  getUserDataFromHasura,
  startCreateUser,
  getPosts,
  createPost,
  deletePost,
  editPost,
  sparsePost,
};
