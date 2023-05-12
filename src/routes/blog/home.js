import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { getSummaries } from "./hasura/getSummaries";
import randomKeyGenerator from "../../utils/randomKeyGenerator";
import monthNameParser from "../../utils/monthNumToName";
import AppBarCustom from "../../components/appbar";
import useWindowSize from "../../utils/useWindowSize";
import { getTitlesForSearchBar } from "./hasura/getTitlesForSearchBar";
import "./app.css";

import SearchBar from "./components/searchBar";
import { ThemeContext } from "@emotion/react";

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
        Here, I will be sharing information that I find useful or interesting,
        based on topics that I am currently exploring and learning about. As an
        avid learner, I am constantly seeking new information and ideas, and I
        am eager to share that knowledge with the world.
      </Typography>
      <Typography variant="subtitle2" textAlign="justify" marginTop={1}>
        Whether you are a fellow learner or just someone who is interested in
        new ideas, I hope you will find something of value here.
      </Typography>
      <Typography variant="subtitle2" textAlign="justify" marginTop={1}>
        So, sit back, relax, and explore the world of ideas with me. Together,
        we can learn and grow, one post at a time!
      </Typography>
      <Typography variant="subtitle2" textAlign="justify" marginTop={1}>
        Cheers!
      </Typography>
    </Box>
  );
};

const BlogHome = () => {
  const [posts, setPosts] = useState();
  const [numPosts, setNumPosts] = useState(10);
  const [loading, setLoading] = useState(true);

  //Get titles for search bar
  //if posts >= titles.length, change LOADMORE button to "That's it!"

  const { width, height } = useWindowSize();

  useEffect(() => {
    getSummaries(numPosts, 0)
      .then((x) => setPosts(x.blog_blog_posts))
      .then((x) => setLoading(false));
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
          onClick={() => setNumPosts(numPosts + 10)}
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
          flex={12}
          borderLeft="1px solid black"
          borderRight="1px solid black"
          paddingX={3}
          maxWidth="60vw"
          width="60vw"
        >
          {!loading ? (
            <Posts />
          ) : (
            <Typography className="swag" textAlign="center">
              LOADING...
            </Typography>
          )}
        </Box>
        <Box flex={3} width="15vw" maxWidth="15vw" padding={3}></Box>
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
      >
        <Box
          sx={{
            paddingX: 3,
            marginTop: 1,
            paddingBottom: 3,
            borderBottom: "1px solid black",
          }}
        >
          <SearchBar />
        </Box>
        <Box>
          {!loading ? (
            <Posts />
          ) : (
            <Typography className="swag" textAlign="center">
              LOADING...
            </Typography>
          )}
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
