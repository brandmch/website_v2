import { useState } from "react";
import { Box } from "@mui/material";
import { confirmSignUp } from "../auth/utils";
import { useParams } from "react-router-dom";
import { LoginSignUpBox } from "../components/login_signupBox";

const Confirm = () => {
  const [code, setCode] = useState("");
  const [incorrectCode, setIncorrectCode] = useState(false);

  let { name, email, username } = useParams();

  const handleConfirm = () => {
    confirmSignUp(email, name, username, code).then((x) => {
      if (x === 3) {
        setIncorrectCode(true);
      }
    });
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
        textFields={[["Code", "code", (e) => setCode(e.target.value)]]}
        button={["Confirm", handleConfirm]}
        text="Check your email for your code!"
        errorMessage="Incorrect Code"
        errorStatus={incorrectCode}
        username={username}
      />
    </Box>
  );
};

export default Confirm;
