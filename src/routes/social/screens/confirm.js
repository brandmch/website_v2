import { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { confirmSignUp } from "../auth/utils";
import { useParams } from "react-router-dom";
import { LoginSignUpBox } from "../components/components/login_signupBox";

const Confirm = () => {
  const [code, setCode] = useState("");

  let { name, email, username } = useParams();

  const handleConfirm = () => {
    confirmSignUp(email, name, username, code);
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
        textFields={[["Code", "code", (e) => setCode(e.target.value)]]}
        button={["Confirm", handleConfirm]}
      />
    </Box>
  );
};

export default Confirm;
