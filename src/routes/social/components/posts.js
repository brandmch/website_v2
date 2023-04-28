import { parseDate } from "../../../utils/parseDate";
import { Box, Button, Typography, Divider, Paper } from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";

export const Posts = ({ posts }) => {
  const Paragraphs = ({ text }) => {
    return text.map((c) => (
      <Typography key={randomKeyGenerator()}>{c === "" ? "\b" : c}</Typography>
    ));
  };

  const Post = ({ props }) => {
    const { id, text, time, Posts_User } = props;
    return (
      <Paper
        elevation={5}
        sx={{ padding: 3, borderRadius: 3, marginBottom: 3 }}
        key={id}
      >
        <Typography>{Posts_User.name}</Typography>
        <Typography>{parseDate(time)}</Typography>
        <Paragraphs text={text} />
        <Divider
          sx={{ backgroundColor: "black", margin: "5px 400px 5px 5px" }}
        />
        <Typography>-{Posts_User.username}</Typography>
      </Paper>
    );
  };

  if (posts) {
    return posts.map((x) => {
      return <Post props={x} key={randomKeyGenerator()} />;
    });
  }
};
