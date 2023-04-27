import { useState, useEffect } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { getCurrentUser, signUp, confirmSignUp } from "../auth/utils";

const SignUp = () => {
  const [input, setInput] = useState({ email: "", password: "", username: "" });

  const handleInput = (e) => {
    let temp = { ...input };
    temp[e.target.id] = e.target.value;
    setInput(temp);
  };

  const handleSignUp = () => {
    signUp(input).then((x) => {
      if (x.username) {
        window.location.href = "/social/signup/confirm";
      }
    });
  };

  return (
    <Box backgroundColor="#000000" height="100vh">
      <Typography>SIGN UP</Typography>
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
    </Box>
  );
};

export default SignUp;
