import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { postPost } from "./hasura/postPost";
import { sparsePost } from "../social/hasura/utils";

export const PostPost = () => {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");

  const handlePost = () => {
    postPost(title, sparsePost(input), Date.now(), summary);
  };
  return (
    <Box
      minHeight="100vh"
      backgroundColor="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding={5}
    >
      <Typography color="white">Bullet pont = {"{{{{{b}}}}}"}</Typography>
      <TextField
        label="title"
        sx={{
          backgroundColor: "#FFFFFF",
          marginTop: 1,
          input: { color: "black" },
          label: { color: "black" },
        }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="summary"
        sx={{
          backgroundColor: "#FFFFFF",
          marginTop: 1,
          input: { color: "black" },
          label: { color: "black" },
        }}
        onChange={(e) => setSummary(e.target.value)}
      />
      <TextField
        label="Ruh roh"
        fullWidth
        multiline
        minRows={16}
        sx={{
          backgroundColor: "#FFFFFF",
          marginTop: 1,
          input: { color: "black" },
          label: { color: "black" },
        }}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handlePost}>Post</Button>
    </Box>
  );
};
