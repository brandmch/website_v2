import { useState } from "react";
import { LoginSignUpBox } from "../components/components/login_signupBox";
import { Box, TextField, Paper, Typography } from "@mui/material";
import { changePassword, signOut } from "../auth/utils";

export const ChangePassword = () => {
  const [currP, setCurrP] = useState("");
  const [newP, setNewP] = useState("");
  const [confirmP, setConfirmP] = useState("");

  const textFields = [
    [
      "Current Password",
      "currentPassword",
      (e) => {
        setCurrP(e.target.value);
      },
    ],
    [
      "New Password",
      "newPassword",
      (e) => {
        setNewP(e.target.value);
      },
    ],
    [
      "Confirm New Password",
      "confirmNewPassword",
      (e) => {
        setConfirmP(e.target.value);
      },
    ],
  ];
  const button = [
    "Change Password",
    () => {
      changePassword(currP, newP).then((x) => {
        if (x === "SUCCESS") {
          signOut();
        }
      });
    },
  ];

  return (
    <Box
      backgroundColor="background.primary"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <LoginSignUpBox textFields={textFields} button={button} />
    </Box>
  );
};
