import { useState, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import { getCurrentUser } from "../auth/utils";
import { AccountMenu } from "../components/accountMenu";
import { getUserDataFromHasura, getPosts } from "../hasura/utils";
import { Posts } from "../components/posts";
import { CreatePostBox } from "../components/createPost";

const HomeScreen = () => {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const [createPostBox, setCreatePostBox] = useState(false);

  useEffect(() => {
    getCurrentUser().then((x) => {
      if (x) {
        getUserDataFromHasura(x.attributes.email).then((x) =>
          setUser(x.social_Users[0])
        );
      }
    });
    getPosts().then((x) => setPosts(x));
  }, []);

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
    <Box backgroundColor="#000000" height="100vh">
      <AccountMenu user={user} setUser={setUser} />
      <UserInfo />
      <Button
        variant="contained"
        onClick={() => setCreatePostBox(!createPostBox)}
      >
        {createPostBox ? "EXIT" : "Create Post"}
      </Button>
      <Posts posts={posts} />
    </Box>
  );
};

export default HomeScreen;
