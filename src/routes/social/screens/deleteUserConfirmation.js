import { useState } from "react";
import { Box } from "@mui/material";
import { LoginSignUpBox } from "../components/components/login_signupBox";
import { deleteUser } from "../auth/utils";
import { deleteUser_UserAndPosts } from "../hasura/utils";
import { useParams } from "react-router-dom";

export const DeleteUserConfirmation = () => {
  const [input, setInput] = useState("");
  const [incorrectInput, setIncorrectInput] = useState(false);

  let userid = useParams().userid;

  const textBox = [["DELETE", "confirm", (e) => setInput(e.target.value)]];
  const button = [
    "DELETE ACCOUNT",
    () => {
      if (input === "DELETE") {
        deleteUser().then((x) => {
          if (x === "SUCCESS") {
            deleteUser_UserAndPosts(userid);
          }
        });
      } else {
        setIncorrectInput(true);
      }
    },
  ];
  const text = 'Please type "DELETE" to confirm.';

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
        textFields={textBox}
        button={button}
        text={text}
        bottomText={["I changed my mind!", `/social/settings/${userid}`]}
        errorStatus={incorrectInput}
        errorMessage="Incorrect input"
      />
    </Box>
  );
};
