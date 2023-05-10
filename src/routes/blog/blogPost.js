import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { getAllPosts } from "./hasura/getAllPosts";
import { getSinglePost } from "./hasura/getPost";
import randomKeyGenerator from "../../utils/randomKeyGenerator";
import { useParams } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";

const CodeBlock = ({ text }) => {
  text = text[0].slice(14, text[0].length - 3);
  text = text.split("{{{{{n}}}}}");

  return (
    <Box
      border="1px solid white"
      backgroundColor="white"
      paddingX={1}
      paddingTop={1}
      paddingBottom={0.5}
      margin={2}
      key={randomKeyGenerator()}
      overflow="scroll"
    >
      {text.map((c) => {
        let temp = c.replace(/{{{{{doublequotes}}}}}/g, '"');
        return (
          <Box key={randomKeyGenerator()} marginBottom={1}>
            <code>{temp}</code>
          </Box>
        );
      })}
    </Box>
  );
};

const InlineCode = ({ text }) => {
  text = text.replace(/{{{{{doublequotes}}}}}/g, '"');

  text = text.split("```").map((c, i) => {
    let temp = c.trim();
    const style = { color: "black", marginLeft: 6, marginRight: 6 };
    return i % 2 === 0
      ? temp
      : React.createElement("code", { style: style }, temp);
  });

  return <Typography color="white">{text}</Typography>;
};

const BulletListItem = ({ p }) => {
  return (
    <Box>
      <Typography color="white" fontSize={17}>
        {"\b"}
        {"\b"}
        <CircleIcon sx={{ fontSize: 8 }} />
        {"\b"}
        {p}
      </Typography>
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
    } else if (p.startsWith("##")) {
      p = p.split("").slice(2).join("");
      return (
        <Typography color="white" variant="h4" marginY={3}>
          {p}
        </Typography>
      );
    } else if (p.startsWith("{{{{{b}}}}}")) {
      p = p.split("").slice(11).join("");
      return <BulletListItem p={p} />;
    } else if (/```/.test(p)) {
      return <InlineCode text={p} />;
    }
    p = p.replace(/{{{{{doublequotes}}}}}/g, '"');

    return (
      <Box marginBottom={2}>
        <Typography color="white" fontSize={17}>
          {p}
        </Typography>
      </Box>
    );
  };

  return textJawn.map((curr) => {
    return (
      <Box key={randomKeyGenerator()} marginBottom={1}>
        <Typography>{curr.title}</Typography>
        <Paragraph p={curr} />
      </Box>
    );
  });
};

export const BlogPost = () => {
  const [post, setPost] = useState();
  const { postid } = useParams();

  useEffect(() => {
    getSinglePost(postid).then((x) => setPost(x.blog_blog_posts));
  }, []);

  return (
    <Box
      minHeight="100vh"
      backgroundColor="black"
      padding={5}
      display="flex"
      alignItems="center"
    >
      {post && (
        <Box maxWidth={700}>
          <Typography color="white" variant="h2" gutterBottom>
            {post[0].title}
          </Typography>
          {post.map((curr) => (
            <Post key={randomKeyGenerator()} text={curr.text} />
          ))}
        </Box>
      )}
    </Box>
  );
};
