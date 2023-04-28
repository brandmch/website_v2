import { useState } from "react";
import { Box, Button, Typography, Divider, TextField } from "@mui/material";
import { createPost, getPosts } from "../hasura/utils";

export const CreatePostBox = ({ setPosts, user }) => {
  const [createPostBox, setCreatePostBox] = useState(false);

  const handleButtonClick = () => {
    if (user) {
      setCreatePostBox(!createPostBox);
    } else {
      window.location.href = "/social/login";
    }
  };

  const TextBox = () => {
    const [input, setInput] = useState();

    const handlePost = () => {
      createPost(input, user.id).then((x) => {
        if (x === 1) {
          getPosts().then((x) => setPosts(x));
        }
      });
    };
    return (
      <Box>
        <TextField
          label="Write something Awesome!"
          sx={{ backgroundColor: "white" }}
          fullWidth
          variant="filled"
          multiline
          minRows={3}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={handlePost}
        >
          POST
        </Button>
      </Box>
    );
  };

  return (
    <Box padding={5}>
      <Button variant="contained" onClick={handleButtonClick}>
        {!user ? "Sign in to post!" : createPostBox ? "EXIT" : "Create Post"}
      </Button>
      {createPostBox && <TextBox />}
    </Box>
  );
};
