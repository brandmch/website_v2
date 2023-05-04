import { useState } from "react";
import { Box, Button, Typography, Divider, TextField } from "@mui/material";
import { createPost, sparsePost } from "../../hasura/utils";
import { CommonButton } from "./button";

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
      const i = sparsePost(input);

      createPost(i, user.id).then((x) => {
        if (x === 1) {
          setLoadPosts(true);
          setCreatePostBox(false);
        }
      });
    };
    return (
      <Box>
        <TextField
          label="Write something Awesome!"
          sx={{ backgroundColor: "white", marginTop: 2 }}
          fullWidth
          variant="filled"
          multiline
          minRows={3}
          onChange={handleInputChange}
        />
        <CommonButton title="POST" callback={handlePost} />
      </Box>
    );
  };

  return (
    <Box padding={5}>
      <CommonButton
        title={
          !user
            ? "Sign in to post!"
            : createPostBox
            ? "Nevermind"
            : "Create Post"
        }
        callback={handleButtonClick}
      />

      {createPostBox && <TextBox />}
    </Box>
  );
};
