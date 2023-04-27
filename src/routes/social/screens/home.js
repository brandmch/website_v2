import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { getCurrentUser } from "../auth/utils";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AccountMenu } from "../components/accountMenu";

const HomeScreen = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getCurrentUser().then((x) => setUser(x));
  }, []);
  console.log("USER", user);
  getCurrentUser().then((x) => console.log("X", x));
  return (
    <Box backgroundColor="#000000" height="100vh">
      <AccountMenu user={user} />
    </Box>
  );
};

export default HomeScreen;
