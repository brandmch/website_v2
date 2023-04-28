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
      <CreatePostBox user={user} setPosts={setPosts} />
      <Posts posts={posts} />
    </Box>
  );
};

export default HomeScreen;
