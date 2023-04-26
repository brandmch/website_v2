import { useState, useEffect } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { getCurrentUser, signUp, confirmSignUp } from "../auth/utils";

const Confirm = () => {
  const [input, setInput] = useState({ username: "", code: "" });

  const handleInput = (e) => {
    let temp = { ...input };
    temp[e.target.id] = e.target.value;
    setInput(temp);
  };

  const handleConfirm = () => {
    confirmSignUp(input);
  };

  return (
    <Box backgroundColor="#000000" height="100vh">
      <Typography>Confirm!</Typography>
      <Box>
        <TextField
          sx={{ backgroundColor: "#FFFFFF" }}
          label="Username"
          id="username"
          onChange={handleInput}
        />
        <TextField
          sx={{ backgroundColor: "#FFFFFF" }}
          label="Code"
          id="code"
          onChange={handleInput}
        />
        <Button variant="contained" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default Confirm;
