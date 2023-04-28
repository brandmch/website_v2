import { parseDate } from "../../../utils/parseDate";
import { Box, Button, Typography, Divider } from "@mui/material";

export const Posts = ({ posts }) => {
  if (posts) {
    return posts.social_Posts.map(({ id, text, time, Posts_User }) => {
      return (
        <Box border="solid 1px blue" padding={1} key={id}>
          <Typography color="white">{Posts_User.name}</Typography>
          <Typography color="white">{parseDate(time)}</Typography>
          <Typography color="white">{text}</Typography>
          <Typography color="white">{Posts_User.name}</Typography>
        </Box>
      );
    });
  }
};
