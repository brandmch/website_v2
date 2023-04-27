import { useState, useEffect } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { getCurrentUser, signUp, confirmSignUp } from "../auth/utils";

const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
  });

  const handleInput = (e) => {
    let temp = { ...input };
    temp[e.target.id] = e.target.value;
    setInput(temp);
  };

  const handleSignUp = () => {
    const { email, password, username, name } = input;
    if (email !== "" && password !== "" && username !== "" && name !== "") {
      signUp({
        email: email,
        password: password,
        username: username,
        name: name,
      }).then((x) => {
        if (x.username) {
          window.location.href = `/social/signup/confirm/${name}/${email}/${username}`;
        }
      });
    }
  };

  return (
    <Box backgroundColor="#000000" height="100vh">
      <Typography>SIGN UP</Typography>
      <Box display="flex" flexDirection="column" width="33vw">
        <Typography color="white">Hello!</Typography>
        <TextField
          sx={{ backgroundColor: "#FFFFFF" }}
          label="Name"
          id="name"
          onChange={(e) => handleInput(e)}
        />
        <TextField
          sx={{ backgroundColor: "#FFFFFF" }}
          label="Username"
          id="username"
          onChange={(e) => handleInput(e)}
        />
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
        <Button variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
