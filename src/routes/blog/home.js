import { useState, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { getSummaries } from "./hasura/getSummaries";
import randomKeyGenerator from "../../utils/randomKeyGenerator";
import monthNameParser from "../../utils/monthNumToName";

const BlogHome = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getSummaries().then((x) =>
      setPosts(
        x.blog_blog_posts.map((c) => {
          let t = new Date(parseInt(c.time));
          let temp = { ...c };
          temp.date = `${monthNameParser(
            t.getMonth()
          )} ${t.getDate()}, ${t.getFullYear()}`;
          return temp;
        })
      )
    );
  }, []);

  const Post = ({ p }) => {
    console.log(p);
    return (
      <Paper
        sx={{ padding: 2, marginBottom: 2 }}
        onClick={() => (window.location.href = `/blog/${p.time}/`)}
      >
        <Typography variant="h4">{p.title}</Typography>
        <Typography variant="subtitle1">{p.summary}</Typography>
        <Typography variant="subtitle2">{p.date}</Typography>
      </Paper>
    );
  };

  return (
    <Box
      minHeight="100vh"
      backgroundColor="black"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={5}
    >
      {posts &&
        posts.map((curr) => <Post key={randomKeyGenerator()} p={curr} />)}
    </Box>
  );
};

export { BlogHome };
