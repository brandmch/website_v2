import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { getSummaries } from "./hasura/getSummaries";
import randomKeyGenerator from "../../utils/randomKeyGenerator";
import monthNameParser from "../../utils/monthNumToName";

const Post = ({ p }) => {
  return (
    <Box
      elevation={3}
      sx={{
        padding: 2,
        marginBottom: 3,
        borderBottom: "1px solid black",
        maxWidth: 1000,
      }}
      onClick={() => (window.location.href = `/blog/${p.time}/`)}
    >
      <Typography variant="h4">{p.title}</Typography>
      <Typography variant="subtitle1">{p.summary}</Typography>
      <Typography variant="caption">{p.date}</Typography>
    </Box>
  );
};

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
      <Typography variant="subtitle2" textAlign="justify">
        Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.
        It’s not a story the Jedi would tell you. It’s a Sith legend. Darth
        Plagueis was a Dark Lord of the Sith, so powerful and so wise he could
        use the Force to influence the midichlorians to create life… He had such
        a knowledge of the dark side that he could even keep the ones he cared
        about from dying. The dark side of the Force is a pathway to many
        abilities some consider to be unnatural. He became so powerful… the only
        thing he was afraid of was losing his power, which eventually, of
        course, he did. Unfortunately, he taught his apprentice everything he
        knew, then his apprentice killed him in his sleep. Ironic. He could save
        others from death, but not himself.
      </Typography>
    </Box>
  );
};

const BlogHome = () => {
  const [posts, setPosts] = useState();
  const [numPosts, setNumPosts] = useState(5);

  useEffect(() => {
    getSummaries(numPosts, 0).then((x) => setPosts(x.blog_blog_posts));
  }, []);

  return (
    <Box
      minHeight="100vh"
      maxWidth="100vw"
      padding={5}
      display="flex"
      justifyContent="center"
      flex={1}
    >
      <Box flex={1}>
        <Intro />
      </Box>
      <Box
        flex={3}
        borderLeft="1px solid black"
        borderRight="1px solid black"
        paddingX={3}
      >
        {posts &&
          posts.map((curr) => <Post key={randomKeyGenerator()} p={curr} />)}
        <Button variant="outlined">Load More</Button>
      </Box>
      <Box flex={1}></Box>
    </Box>
  );
};

export { BlogHome, Post };
