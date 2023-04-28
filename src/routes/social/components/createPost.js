import { useState } from "react";
import { Box, Button, Typography, Divider, TextField } from "@mui/material";
import { createPost, getPosts } from "../hasura/utils";

export const CreatePostBox = ({ setLoadPosts, user }) => {
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

    const handleInputChange = (e) => {
      setInput(e.target.value);
    };

    const handlePost = () => {
      const i = input
        .split("")
        .map((c) => {
          if (c === "\n") {
            return "{{{{{n}}}}}";
          } else if (c === '"') {
            return "{{{{{doublequotes}}}}}";
          } else {
            return c;
          }
        })
        .join("");
      console.log(i);
      console.log(user.id);
      createPost(i, user.id).then((x) => {
        if (x === 1) {
          setLoadPosts(true);
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
          onChange={handleInputChange}
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
