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
import useWindowSize from "../../../utils/useWindowSize";

const HomeScreen = () => {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const [loadPosts, setLoadPosts] = useState(true);
  const [postsOnPage, setPostsOnPage] = useState(10);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const { width, height } = useWindowSize();

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
    setPostsOnPage(postsOnPage + 10);
    setLoadPosts(true);
  };

  const Desktop = () => {
    return (
      <Box>
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
      </Box>
    );
  };

  const Mobile = () => {
    return (
      <Box>
        <Box display="flex">
          <Box flex={1} />
          <Box flex={5}>
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
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <AppBarCustom />
      <Box backgroundColor="background.primary" padding={3} minHeight="100vh">
        {width >= 700 ? <Desktop /> : <Mobile />}
        <FooterCustom url="https://github.com/brandmch/website_v2/tree/master/src/routes/social" />
      </Box>
    </Box>
  );
};

export default HomeScreen;
