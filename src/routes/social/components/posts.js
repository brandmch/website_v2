import { parseDate } from "../../../utils/parseDate";
import { Box, Button, Typography, Divider } from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";

export const Posts = ({ posts }) => {
  const Paragraphs = ({ text }) => {
    return text.map((c) => (
      <Typography color="white" key={randomKeyGenerator()}>
        {c === "" ? "\b" : c}
      </Typography>
    ));
  };

  if (posts) {
    return posts.map(({ id, text, time, Posts_User }) => {
      return (
        <Box border="solid 1px blue" padding={1} key={id}>
          <Typography color="white">{Posts_User.name}</Typography>
          <Typography color="white">{parseDate(time)}</Typography>
          <Paragraphs text={text} />
          <Divider
            sx={{ backgroundColor: "white", margin: "5px 400px 5px 5px" }}
          />
          <Typography color="white">-{Posts_User.username}</Typography>
        </Box>
      );
    });
  }
};
