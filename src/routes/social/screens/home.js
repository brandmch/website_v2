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
import AppBarCustom from "../../../components/appbar";
import FooterCustom from "../../../components/footer";

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
    <Box>
      <AppBarCustom />
      <Box backgroundColor="background.primary" padding={3} minHeight="100vh">
        <Box display="flex">
          <Box flex={1} />
          <Box flex={3}>
            <CreatePostBox user={user} setLoadPosts={setLoadPosts} />
          </Box>
          <Box
            flex={1}
            display="flex"
            justifyContent="right"
            alignItems="start"
          >
            <AccountMenu user={user} />
          </Box>
        </Box>
        <Box marginBottom={4} display="flex">
          <Box flex={1} />
          <Box flex={3}>
            <Posts posts={posts} user={user} setLoadPosts={setLoadPosts} />
            {loadingPosts ? (
              <Box display="flex" justifyContent="center">
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
        <FooterCustom url="https://github.com/brandmch/website_v2/tree/master/src/routes/social" />
      </Box>
    </Box>
  );
};

export default HomeScreen;
