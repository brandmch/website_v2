import { useState, useEffect } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { signIn, getCurrentUser, signOut } from "../auth/utils";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    let temp = { ...input };
    temp[e.target.id] = e.target.value;
    setInput(temp);
  };

  const handleSignIn = () => {
    signIn(input);
  };

  // getCurrentUser();

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
        <Button variant="contained" onClick={handleSignIn}>
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
