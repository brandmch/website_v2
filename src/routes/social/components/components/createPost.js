import { useState } from "react";
import { Box, Button, Typography, Divider, TextField } from "@mui/material";
import { createPost, sparsePost } from "../../hasura/utils";
import { CommonButton } from "./button";

export const CreatePostBox = ({ setLoadPosts, user, size }) => {
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
          InputLabelProps={{ style: { color: "#777776" } }}
        />
        <CommonButton title="POST" callback={handlePost} />
      </Box>
    );
  };

  const Desktop = () => {
    return (
      <Box paddingBottom={5}>
        <Box>
          {user ? (
            <TextBox />
          ) : (
            <CommonButton
              title="Sign in to post!"
              callback={() => (window.location.href = "/social/login")}
            />
          )}
        </Box>
      </Box>
    );
  };

  const Mobile = () => {
    return (
      <Box paddingBottom={5} width="100vw">
        {user ? (
          <TextBox />
        ) : (
          <CommonButton
            title="Sign in to post!"
            callback={() => (window.location.href = "/social/login")}
          />
        )}
      </Box>
    );
  };

  return size === "desktop" ? <Desktop /> : <Mobile />;
};
