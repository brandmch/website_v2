import { useState, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
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
        .then((x) => setLoadPosts(false));
    }
  }, [loadPosts]);

  const loadMorePosts = () => {
    setPostsOnPage(postsOnPage + 5);
    setLoadPosts(true);
  };

  const UserInfo = () => {
    return user ? (
      <Box>
        <Typography color="white">Welcome {user.name}!</Typography>
      </Box>
    ) : (
      <Box>
        <Typography color="white">Welcome stranger!</Typography>
      </Box>
    );
  };

  return (
    <Box backgroundColor="#E2EAFF" padding={3}>
      {/* <Box backgroundColor="#000000" padding={3}> */}
      <AccountMenu user={user} setUser={setUser} />
      <UserInfo />
      <Box display="flex" fullWidth flex={1}>
        <Box flex={1} />
        <Box flex={2}>
          <CreatePostBox user={user} setLoadPosts={setLoadPosts} />
          <Posts posts={posts} user={user} setLoadPosts={setLoadPosts} />
          <CommonButton title="LOAD MORE" callback={loadMorePosts} />
        </Box>
        <Box flex={1} />
      </Box>
    </Box>
  );
};

export default HomeScreen;
