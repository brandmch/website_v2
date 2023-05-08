import { useState, useEffect } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { HexColorPicker } from "react-colorful";
import { getHasuraUserByID, changeColorHasura } from "../hasura/utils";

//nightmode, changeColor, changePassword, deleteAccount

const Settings = () => {
  const [color, setColor] = useState("#0046FF");
  const [showColors, setShowColors] = useState(false);
  const [user, setUser] = useState();

  let userid = useParams().userid;

  useEffect(() => {
    getHasuraUserByID(userid).then((x) => setUser(x.social_Users[0]));
  }, []);

  const changePassword = () => {
    window.location.href = `/social/changepassword`;
  };

  const deleteAccount = () => {
    window.location.href = `/social/deleteuserconfirmation/${userid}`;
  };

  const changeColor = () => {
    changeColorHasura(user.id, color).then(
      () => (window.location.href = `/social`)
    );
  };

  const options = [
    ["Change color", changeColor],
    ["Change password", changePassword],
    ["Delete account", deleteAccount],
  ];

  const Option = ({ x }) => {
    const [title, callback] = x;
    return (
      <Box
        display="flex"
        alignItems="center"
        flex={1}
        minWidth={200}
        key={title}
      >
        <Box flex={5}>
          <Typography>{title}</Typography>
        </Box>
        <Box flex={1}>
          <Button onClick={callback}>GO</Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      backgroundColor="background.primary"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        {options.map((curr) => (
          <Option x={curr} key={curr[0]} />
        ))}
      </Paper>
      <HexColorPicker color={color} onChange={setColor} />
    </Box>
  );
};
export default Settings;
{
  /* <Typography color="text.primary">SETTINGS</Typography>
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
</Box> */
}
