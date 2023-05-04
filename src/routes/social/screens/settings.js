import { Box, Typography, Button, Switch } from "@mui/material";
import { useParams } from "react-router-dom";

//nightmode, changeColor, changePassword, deleteAccount

const Settings = () => {
  let userid = useParams().userid;

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
      <Box display="flex" alignItems="center">
        <Typography color="text.primary">changepassword</Typography>
        <Button
          onClick={() => {
            window.location.href = `/social/changepassword`;
          }}
        >
          GO
        </Button>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography color="text.primary">delete account</Typography>
        <Button
          onClick={() => {
            window.location.href = `/social/deleteuserconfirmation/${userid}`;
          }}
        >
          GO
        </Button>
      </Box>
    </Box>
  );
};
export default Settings;
