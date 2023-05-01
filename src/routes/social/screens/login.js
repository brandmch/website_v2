import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { signIn } from "../auth/utils";
import { LoginSignUpBox } from "../components/components/login_signupBox";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log(email, password);
    signIn({ email: email, password: password });
  };

  return (
    <Box
      backgroundColor="#E2EAFF"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <LoginSignUpBox
        textFields={[
          ["Email", "email", (e) => setEmail(e.target.value)],
          ["Password", "password", (e) => setPassword(e.target.value)],
        ]}
        button={["Sign In", handleSignIn]}
      />
    </Box>
  );
};

export default Login;
