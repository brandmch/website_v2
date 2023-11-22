import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { postPost } from "./hasura/postPost";
import { sparsePost } from "../social/hasura/utils";

export const PostPost = () => {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");
  const [sendingPost, setSendingPost] = useState(false);

  const handlePost = async () => {
    setSendingPost(true);
    const post = await postPost(
      title,
      sparsePost(input),
      Date.now(),
      summary
    ).then(({ success, data }) => {
      setSendingPost(false);
      console.log(success ? "Success!" : "ERROR", data);
    });
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
      <Typography color="white">Tab = {"{{{{{t}}}}}"}</Typography>
      <Typography color="white">Bold = {"@@@"} Before&After</Typography>
      <Typography color="white">Header = ##</Typography>
      <Typography color="white">Code = ``` Before&After</Typography>
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
        onChange={(e) => {
          setInput(e.target.value);
          setSendingPost(false);
        }}
      />
      <Button onClick={handlePost}>Post</Button>
      {sendingPost && <Typography color="lightgreen">Sending...</Typography>}
    </Box>
  );
};
