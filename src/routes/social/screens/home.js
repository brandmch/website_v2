import { useState, useEffect } from "react";
import { Box, CircularProgress, Button } from "@mui/material";
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
  const [postsOnPage, setPostsOnPage] = useState(5);
  const [loadingPosts, setLoadingPosts] = useState(false);

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
          setLoadingPosts(false);
        });
    }
  }, [loadPosts]);

  const loadMorePosts = () => {
    setLoadingPosts(true);
    setPostsOnPage(postsOnPage + 5);
    setLoadPosts(true);
  };

  return (
    <Box backgroundColor="background.primary" padding={3}>
      {/* <Box backgroundColor="#000000" padding={3}> */}
      <Box display="flex" justifyContent="right">
        <Button>change</Button>
        <AccountMenu user={user} />
      </Box>
      <Box display="flex" fullWidth flex={1} marginTop={-5}>
        <Box flex={1} />
        <Box flex={2}>
          <CreatePostBox user={user} setLoadPosts={setLoadPosts} />
          <Posts posts={posts} user={user} setLoadPosts={setLoadPosts} />
          <CommonButton
            title={loadingPosts ? <CircularProgress /> : "LOAD MORE"}
            callback={loadMorePosts}
          />
        </Box>
        <Box flex={1} />
      </Box>
    </Box>
  );
};

export default HomeScreen;
