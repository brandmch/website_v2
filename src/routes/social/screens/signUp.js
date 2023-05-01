import { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { signUp } from "../auth/utils";
import { LoginSignUpBox } from "../components/components/login_signupBox";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (
      confirmPassword === password &&
      email !== "" &&
      password !== "" &&
      username !== "" &&
      name !== ""
    ) {
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
    <Box
      backgroundColor="#E2EAFF"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <LoginSignUpBox
        textFields={[
          ["Name", "name", (e) => setName(e.target.value)],
          ["Username", "username", (e) => setUsername(e.target.value)],
          ["Email", "email", (e) => setEmail(e.target.value)],
          ["Password", "password", (e) => setPassword(e.target.value)],
          ["Confirm Password", (e) => setConfirmPassword(e.target.value)],
        ]}
        button={["Sign Up", handleSignUp]}
      />
    </Box>
  );
};

export default SignUp;
