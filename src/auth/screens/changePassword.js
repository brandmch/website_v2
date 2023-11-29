import { useState } from "react";
import { LoginSignUpBox } from "../components/login_signupBox";
import { Box } from "@mui/material";
import { changePassword, signOut } from "../auth/utils";

export const ChangePassword = () => {
  const [currP, setCurrP] = useState("");
  const [newP, setNewP] = useState("");
  const [confirmP, setConfirmP] = useState("");

  const [incorrectCurrPassword, setIncorrectCurrPassword] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [limitExceeded, setLimitExceeded] = useState(false);

  const handleSubmit = () => {
    setIncorrectCurrPassword(false);
    setBadPassword(false);
    setPasswordsDontMatch(false);
    setLimitExceeded(false);
    if (
      newP === confirmP &&
      /^[\S]+.*[\S]+$/.test(newP) &&
      /^[\S]+.*[\S]+$/.test(currP)
    ) {
      changePassword(currP, newP).then((x) => {
        console.log(x);
        if (x === 1) {
          setIncorrectCurrPassword(true);
        } else if (x === 2) {
          setLimitExceeded(true);
        } else if (x === "SUCCESS") {
          signOut("/social/login");
        }
      });
    } else if (!/^[\S]+.*[\S]+$/.test(currP)) {
      setIncorrectCurrPassword(true);
    } else if (!/^[\S]+.*[\S]+$/.test(newP)) {
      setBadPassword(true);
    } else {
      setPasswordsDontMatch(true);
    }
  };

  const textFields = [
    [
      "Current Password",
      "currentpassword",
      (e) => {
        setCurrP(e.target.value);
      },
    ],
    [
      "New Password",
      "newpassword",
      (e) => {
        setNewP(e.target.value);
      },
    ],
    [
      "Confirm New Password",
      "confirmNewpassword",
      (e) => {
        setConfirmP(e.target.value);
      },
    ],
  ];

  const button = ["Change Password", handleSubmit];

  const errorMessage = () => {
    return limitExceeded
      ? "Too many attempts. Please try again later."
      : incorrectCurrPassword
      ? "Current Password is incorrect"
      : badPassword
      ? "Password must be at least 8 characters, contain 1 number, 1 special character, 1 uppercase, 1 lowercase"
      : passwordsDontMatch
      ? "Passwords do not match!"
      : null;
  };
  const errorStatus = () => {
    return limitExceeded
      ? limitExceeded
      : incorrectCurrPassword
      ? incorrectCurrPassword
      : badPassword
      ? badPassword
      : passwordsDontMatch
      ? passwordsDontMatch
      : null;
  };

  return (
    <Box
      backgroundColor="background.primary"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <LoginSignUpBox
        textFields={textFields}
        button={button}
        errorMessage={errorMessage()}
        errorStatus={errorStatus()}
      />
    </Box>
  );
};
