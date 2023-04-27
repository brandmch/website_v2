import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { getCurrentUser } from "../auth/utils";
import { AccountMenu } from "../components/accountMenu";
import { getUserDataFromHasura } from "../hasura/utils";

const HomeScreen = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getCurrentUser().then((x) => {
      if (x) {
        getUserDataFromHasura(x.attributes.email).then((x) =>
          setUser(x.social_Users[0])
        );
      }
    });
  }, []);

  console.log(user);

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
    </Box>
  );
};

export default HomeScreen;
