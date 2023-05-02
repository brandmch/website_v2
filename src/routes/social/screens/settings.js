import { Box, Typography } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { useContext, createContext } from "react";
//nightmode, changeColor, changePassword, deleteAccount

const Settings = () => {
  return (
    <Box
      backgroundColor="background.primary"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography color="text.primary">SETTINGS</Typography>
      <Typography color="text.primary">night mode</Typography>
      <Typography color="text.primary">change color</Typography>
      <Typography color="text.primary">changepassword</Typography>
      <Typography color="text.primary">delete account</Typography>
    </Box>
  );
};
export default Settings;
