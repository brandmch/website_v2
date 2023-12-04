import { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { signUp } from "../auth-methods";
import { LoginSignUpBox } from "../components/login_signupBox";
import { useParams } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const { returnPage } = useParams();

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
        console.log(x);
        if (x.username) {
          window.location.href = `/signup/confirm/${name}/${email}/${username}/${returnPage}`;
        } else if (x === 4) {
          setInvalidPassword(true);
        }
      });
    } else if (password !== confirmPassword) {
      setPasswordsDontMatch(true);
    }
  };

  const errorStatus = () => {
    return passwordsDontMatch
      ? passwordsDontMatch
      : invalidPassword
      ? invalidPassword
      : null;
  };
  const errorMessage = () => {
    return passwordsDontMatch
      ? "Passwords do not match or bad email"
      : invalidPassword
      ? "Password must be at least 8 characters, contain 1 number, 1 special character, 1 uppercase, 1 lowercase"
      : null;
  };

  return (
    <Box
      backgroundColor="background.primary"
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
          [
            "Confirm Password",
            "confirmpassword",
            (e) => setConfirmPassword(e.target.value),
          ],
        ]}
        button={["Sign Up", handleSignUp]}
        errorStatus={errorStatus()}
        errorMessage={errorMessage()}
      />
    </Box>
  );
};

export default SignUp;
