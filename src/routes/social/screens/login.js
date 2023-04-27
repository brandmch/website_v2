import { useState, useEffect } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { getCurrentUser, signUp, confirmSignUp } from "../auth/utils";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "", username: "" });

  const handleInput = (e) => {
    let temp = { ...input };
    temp[e.target.id] = e.target.value;
    setInput(temp);
  };

  const handleSignUp = () => {
    signUp(input);
  };

  const handleConfirm = () => {
    confirmSignUp(input.username, confirm);
  };

  return (
    <Box backgroundColor="#000000" height="100vh">
      <Box>
        <Typography color="white">Hello!</Typography>
        <TextField
          sx={{ backgroundColor: "#FFFFFF" }}
          label="Email"
          id="email"
          onChange={(e) => handleInput(e)}
        />
        <TextField
          sx={{ backgroundColor: "#FFFFFF" }}
          label="Password"
          id="password"
          onChange={(e) => handleInput(e)}
        />
        <TextField
          sx={{ backgroundColor: "#FFFFFF" }}
          label="Username"
          id="username"
          onChange={(e) => handleInput(e)}
        />
        <Button variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Box>
      <Box>
        <TextField
          sx={{ backgroundColor: "#FFFFFF" }}
          label="Email"
          id="email"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Button variant="contained" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
