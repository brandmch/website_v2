import { Box, Typography, Button, Switch } from "@mui/material";
import { getCurrentUser } from "../auth/utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { changeDarkMode } from "../hasura/utils";
//nightmode, changeColor, changePassword, deleteAccount

const Settings = () => {
  const params = useParams();

  console.log(params);
  return (
    <Box
      backgroundColor="background.primary"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography color="text.primary">SETTINGS</Typography>
      <Box display="flex" alignItems="center">
        <Typography color="text.primary">night mode</Typography>
        <Switch
        // onChange={() => changeDarkMode(params.userid, params.darkmode)}
        />
      </Box>
      <Box>
        <Typography color="text.primary">change color</Typography>
      </Box>
      <Box>
        <Typography color="text.primary">changepassword</Typography>
      </Box>
      <Box>
        <Typography color="text.primary">delete account</Typography>
      </Box>
    </Box>
  );
};
export default Settings;
