import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { getSummaries } from "./hasura/getSummaries";
import randomKeyGenerator from "../../utils/randomKeyGenerator";
import monthNameParser from "../../utils/monthNumToName";
import AppBarCustom from "../../components/appbar";
import useWindowSize from "../../utils/useWindowSize";
import { getTitlesForSearchBar } from "./hasura/getTitlesForSearchBar";

import SearchBar from "./components/searchBar";

const Post = ({ p, lastPost }) => {
  return (
    <Box
      elevation={3}
      sx={{
        padding: 2,
        borderBottom: p.time !== lastPost ? "1px solid black" : null,
        // maxWidth: 1000,
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

const Intro = ({ size }) => {
  return (
    <Box
      sx={{
        padding: 2,
        marginRight: size === "desktop" ? 3 : 0,
        marginTop: size === "mobile" ? 3 : 0,
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

  //Get titles for search bar
  //if posts >= titles.length, change LOADMORE button to "That's it!"

  const { width, height } = useWindowSize();

  useEffect(() => {
    getSummaries(numPosts, 0).then((x) => setPosts(x.blog_blog_posts));
  }, [numPosts]);

  const Posts = () => {
    return (
      <Box>
        {posts &&
          posts.map((curr) => (
            <Post
              key={randomKeyGenerator()}
              p={curr}
              lastPost={posts[posts.length - 1].time}
            />
          ))}
        <Button
          variant="outlined"
          fullWidth
          sx={{ borderColor: "black", color: "black", marginTop: 3 }}
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
        padding={4}
        display="flex"
        justifyContent="center"
        flex={1}
      >
        <Box flex={5} maxWidth="25vw" width="25vw">
          <Box
            sx={{
              padding: 2,
              marginRight: 3,
              marginBottom: 3,
              paddingBottom: 3,
              borderBottom: "1px solid black",
            }}
          >
            <SearchBar />
          </Box>
          <Intro size="desktop" />
        </Box>
        <Box
          flex={13}
          borderLeft="1px solid black"
          borderRight="1px solid black"
          paddingX={3}
          maxWidth="65vw"
          width="65vw"
        >
          <Posts />
        </Box>
        <Box flex={2} width="10vw" maxWidth="10vw" padding={3}></Box>
      </Box>
    );
  };

  const Mobile = () => {
    return (
      <Box
        minHeight="100vh"
        maxWidth="100vw"
        padding={
          width > 850
            ? 5
            : width > 700
            ? 4
            : width > 550
            ? 3
            : width > 400
            ? 2
            : 1
        }
        // display="flex"
        // flexDirection="column"
        // justifyContent="center"
        // alignItems="center"
      >
        <Box
          sx={{
            // marginRight: "auto",
            // marginLeft: "auto",
            // width: "80vw",
            // marginBottom: 3,
            paddingX: 3,
            marginTop: 1,
            paddingBottom: 3,
            borderBottom: "1px solid black",
          }}
        >
          <SearchBar />
        </Box>
        <Box>
          <Posts />
        </Box>
        <Box>
          <Intro size="mobile" />
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <AppBarCustom />
      {width > 1100 ? <Desktop /> : <Mobile />}
    </Box>
  );
};

export { BlogHome, Post };
