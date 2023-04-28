import { useState, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import { getCurrentUser } from "../auth/utils";
import { AccountMenu } from "../components/accountMenu";
import { getUserDataFromHasura, getPosts } from "../hasura/utils";
import { Posts } from "../components/posts";
import { CreatePostBox } from "../components/createPost";

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
      <AccountMenu user={user} setUser={setUser} />
      <UserInfo />
      <CreatePostBox user={user} setLoadPosts={setLoadPosts} />
      <Box marginX={20}>
        <Posts posts={posts} />
      </Box>
      <Button variant="contained" fullWidth onClick={loadMorePosts}>
        LOAD MORE
      </Button>
    </Box>
  );
};

export default HomeScreen;
