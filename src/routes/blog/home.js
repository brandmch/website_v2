import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { getSummaries } from "./hasura/getSummaries";
import randomKeyGenerator from "../../utils/randomKeyGenerator";
import monthNameParser from "../../utils/monthNumToName";
import AppBarCustom from "../../components/appbar";
import useWindowSize from "../../utils/useWindowSize";

const Post = ({ p }) => {
  return (
    <Box
      elevation={3}
      sx={{
        padding: 2,
        marginBottom: 3,
        borderBottom: "1px solid black",
        maxWidth: 1000,
        cursor: "pointer",
      }}
      onClick={() => (window.location.href = `/blog/${p.time}/`)}
    >
      <Typography variant="h4">{p.title}</Typography>
      <Typography variant="subtitle1">{p.summary}</Typography>
      <Typography variant="caption">{p.date}</Typography>
    </Box>
  );
};

const Posts = ({ x }) => {};

const Intro = () => {
  return (
    <Box
      sx={{
        padding: 2,
        marginRight: 3,
        marginBottom: 3,
        borderBottom: "1px solid black",
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h5" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="subtitle2" textAlign="justify" marginTop={1}>
        On this site you will find blog posts about information I find useful.
      </Typography>
      <Typography variant="subtitle2" textAlign="justify" marginTop={1}>
        As I continue to learn, I thought it would be great to catalogue any
        information I find interesting or useful.
      </Typography>
      <Typography variant="subtitle2" textAlign="justify" marginTop={1}>
        I want to share this information with the world. I hope it will help
        others learn about the same topics I have learned myself
      </Typography>
      <Typography variant="subtitle2" textAlign="justify" marginTop={1}>
        If there is anything in particular you would like to learn more about,
        please share! Chances are I'd like to learn to.
      </Typography>
      <Typography variant="subtitle2" textAlign="justify" marginTop={1}>
        Cheers!
      </Typography>
    </Box>
  );
};

const BlogHome = () => {
  const [posts, setPosts] = useState();
  const [numPosts, setNumPosts] = useState(5);

  const { width, height } = useWindowSize();

  useEffect(() => {
    getSummaries(numPosts, 0).then((x) => setPosts(x.blog_blog_posts));
  }, [numPosts]);

  const Posts = () => {
    return (
      <Box>
        {posts &&
          posts.map((curr) => <Post key={randomKeyGenerator()} p={curr} />)}
        <Button
          variant="outlined"
          fullWidth
          sx={{ borderColor: "black", color: "black" }}
          onClick={() => setNumPosts(numPosts + 5)}
        >
          Load More
        </Button>
      </Box>
    );
  };

  const Desktop = () => {
    return (
      <Box
        minHeight="100vh"
        maxWidth="100vw"
        padding={5}
        display="flex"
        justifyContent="center"
        flex={1}
      >
        <Box flex={1} maxWidth="20vw" width="20vw">
          <Intro />
        </Box>
        <Box
          flex={3}
          borderLeft="1px solid black"
          borderRight="1px solid black"
          paddingX={3}
          maxWidth="60vw"
          width="60vw"
        >
          <Posts />
        </Box>
        <Box flex={width > 1100 ? 1 : null} width="20vw" maxWidth="20vw"></Box>
      </Box>
    );
  };

  const Mobile = () => {
    return (
      <Box
        minHeight="100vh"
        maxWidth="100vw"
        padding={5}
        justifyContent="center"
      >
        <Box>
          <Intro />
        </Box>
        <Box paddingX={3}>
          <Posts />
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <AppBarCustom />
      {width > 850 ? <Desktop /> : <Mobile />}
    </Box>
  );
};

export { BlogHome, Post };
