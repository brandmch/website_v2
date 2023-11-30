import { useState } from "react";
import { Box } from "@mui/material";
import { signIn } from "../auth-methods";
import { LoginSignUpBox } from "../components/login_signupBox";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEorP, setBadEorP] = useState(false);

  const handleSignIn = () => {
    signIn({ email: email, password: password }, "/social").then((x) => {
      if (x === 1) {
        setBadEorP(true);
      }
    });
  };

  return (
    <Box
      backgroundColor="background.primary"
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
        bottomText={["Sign up!", "/signup"]}
        errorStatus={badEorP}
        errorMessage="Incorrect email or password!"
      />
    </Box>
  );
};

export default Login;
