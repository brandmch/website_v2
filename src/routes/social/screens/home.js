import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { getCurrentUser } from "../auth/utils";
import { getUserDataFromHasura, getPosts } from "../hasura/utils";
import {
  CommonButton,
  CreatePostBox,
  Posts,
  AccountMenu,
} from "../components/utils";

const HomeScreen = () => {
  // user = {email, id, name, username}
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const [loadPosts, setLoadPosts] = useState(true);
  const [postsOnPage, setPostsOnPage] = useState(10);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    getCurrentUser().then((x) => {
      if (x) {
        getUserDataFromHasura(x.attributes.email).then((x) =>
          setUser(x.social_Users[0])
        );
      }
    });
  }, []);

  useEffect(() => {
    if (loadPosts) {
      getPosts(postsOnPage)
        .then((x) => setPosts(x))
        .then((x) => {
          setLoadPosts(false);
        });
    }
    setLoadingPosts(false);
  }, [loadPosts]);

  const loadMorePosts = () => {
    setLoadingPosts(true);
    setPostsOnPage(postsOnPage + 10);
    setLoadPosts(true);
  };

  return (
    <Box backgroundColor="background.primary" padding={3} minHeight="100vh">
      <Box display="flex" justifyContent="right">
        <AccountMenu user={user} />
      </Box>
      <Box display="flex" fullWidth flex={1} marginTop={-5}>
        <Box flex={1} />
        <Box flex={2}>
          <CreatePostBox user={user} setLoadPosts={setLoadPosts} />
          <Posts posts={posts} user={user} setLoadPosts={setLoadPosts} />
          {loadingPosts ? (
            <Box fullWidth display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <CommonButton
              title={loadingPosts ? <CircularProgress /> : "LOAD MORE"}
              callback={loadMorePosts}
            />
          )}
        </Box>
        <Box flex={1} />
      </Box>
    </Box>
  );
};

export default HomeScreen;
