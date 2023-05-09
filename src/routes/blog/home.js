import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { getAllPosts } from "./hasura/getAllPosts";
import randomKeyGenerator from "../../utils/randomKeyGenerator";

const CodeBlock = ({ text }) => {
  console.log(text[0]);
  text = text[0].slice(14, text[0].length - 3);
  text = text.split("{{{{{n}}}}}");

  return (
    <Box
      border="1px solid white"
      backgroundColor="white"
      padding={1}
      key={randomKeyGenerator()}
    >
      {text.map((c) => (
        <Box>
          <code>{c}</code>
        </Box>
      ))}
    </Box>
  );
};

const Post = ({ text }) => {
  let textJawn = [];

  text = text.split("{{{{{n}}}}}");

  let include = false;
  text.map((curr, i) => {
    if (curr.startsWith("```")) {
      include = true;
    }
    if (include) {
      let temp = textJawn.pop();
      temp = `${temp}{{{{{n}}}}}${curr}`;
      textJawn.push([temp]);
    } else {
      textJawn.push(curr);
    }
    if (curr.endsWith("```")) {
      include = false;
    }
  });

  const Paragraph = ({ p }) => {
    if (Array.isArray(p)) {
      return <CodeBlock text={p} />;
    } else if (p[0] === "#" && p[1] === "#") {
      p = p.split("").slice(2).join("");
      return (
        <Typography color="white" variant="h3">
          {p}
        </Typography>
      );
    }

    return <Typography color="white">{p}</Typography>;
  };

  return textJawn.map((curr) => {
    return (
      <Box key={randomKeyGenerator()} marginBottom={1}>
        <Paragraph p={curr} />
      </Box>
    );
  });
};

const BlogHome = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getAllPosts().then((x) => setPosts(x.blog_blog_posts));
  }, []);

  return (
    <Box minHeight="100vh" backgroundColor="black">
      {posts &&
        posts.map((curr) => (
          <Post key={randomKeyGenerator()} text={curr.text} />
        ))}
    </Box>
  );
};

export { BlogHome };
