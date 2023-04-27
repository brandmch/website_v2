import { useState, useEffect } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { getCurrentUser, signUp, confirmSignUp } from "../auth/utils";
import { useParams } from "react-router-dom";

const Confirm = () => {
  const [code, setCode] = useState("");

  let { name, email, username } = useParams();
  console.log(name);
  console.log(email);
  console.log(username);

  const handleConfirm = () => {
    confirmSignUp(email, name, username, code);
  };

  return (
    <Box backgroundColor="#000000" height="100vh">
      <Typography>Confirm!</Typography>
      <Box>
        <TextField
          sx={{ backgroundColor: "#FFFFFF" }}
          label="Code"
          id="code"
          onChange={(e) => setCode(e.target.value)}
        />
        <Button variant="contained" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default Confirm;
