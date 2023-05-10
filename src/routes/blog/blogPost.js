import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { getAllPosts } from "./hasura/getAllPosts";
import { getSummaries } from "./hasura/getSummaries";
import { getSinglePost } from "./hasura/getPost";
import randomKeyGenerator from "../../utils/randomKeyGenerator";
import { useParams } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";

const Summary = ({ p }) => {
  return (
    <Box
      sx={{
        padding: 2,
        marginRight: 3,
        marginBottom: 3,
        borderBottom: "1px solid black",
      }}
      onClick={() => (window.location.href = `/blog/${p.time}/`)}
    >
      <Typography variant="h5">{p.title}</Typography>
      <Typography variant="subtitle2">{p.date}</Typography>
    </Box>
  );
};

const CodeBlock = ({ text }) => {
  text = text[0].slice(14, text[0].length - 3);
  text = text.split("{{{{{n}}}}}");

  return (
    <Box
      border="1px solid black"
      borderRadius={1}
      backgroundColor="#F8F8F8"
      paddingX={1}
      paddingTop={1}
      paddingBottom={0.5}
      margin={4}
      key={randomKeyGenerator()}
      whiteSpace="nowrap"
      overflow="scroll"
    >
      {text.map((c) => {
        let temp = c.replace(/{{{{{doublequotes}}}}}/g, '"');
        let n = [...temp.matchAll(/{{{{{t}}}}}/g)].length;
        temp = temp.replace(/{{{{{t}}}}}/g, "");
        return (
          <Box key={randomKeyGenerator()} marginBottom={1} marginLeft={n * 2}>
            <code style={{ fontSize: 14, backgroundColor: "#F8F8F8" }}>
              {temp}
            </code>
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
    const style = {
      marginLeft: 6,
      marginRight: 6,
      fontSize: 14,
      backgroundColor: "#F8F8F8",
    };
    return i % 2 === 0
      ? temp
      : React.createElement(
          "code",
          { style: style, key: randomKeyGenerator() },
          temp
        );
  });

  return <Typography>{text}</Typography>;
};

const BulletListItem = ({ p }) => {
  if (/```/.test(p)) {
    return (
      <Box marginLeft={3} display="flex">
        <CircleIcon sx={{ fontSize: 8, marginRight: 2, marginTop: 1 }} />
        <Box>
          <InlineCode text={p} />
        </Box>
      </Box>
    );
  }
  return (
    <Box marginLeft={4} display="flex">
      <CircleIcon sx={{ fontSize: 8, marginRight: 2, marginTop: 1 }} />
      <Typography fontSize={17}>{p}</Typography>
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
        <Typography variant="h4" marginY={3}>
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
        <Typography fontSize={17}>{p}</Typography>
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
  const [summaries, setSummaries] = useState();
  const [offsetSummaries, setOffSetSummaries] = useState(0);
  const { postid } = useParams();

  useEffect(() => {
    getSinglePost(postid).then((x) => setPost(x.blog_blog_posts));
    getSummaries(5, offsetSummaries).then((x) => {
      if (x.blog_blog_posts.length > 0) {
        setSummaries(x.blog_blog_posts);
      } else {
        setOffSetSummaries(offsetSummaries - 5);
      }
    });
  }, [offsetSummaries]);

  const moreSummaries = () => {
    setOffSetSummaries(offsetSummaries + 5);
  };
  const lessSummaries = () => {
    if (offsetSummaries > 0) {
      setOffSetSummaries(offsetSummaries - 5);
    }
  };

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
        {summaries &&
          summaries.map((curr) => (
            <Summary key={randomKeyGenerator()} p={curr} />
          ))}
        <Box
          display="flex"
          justifyContent="center"
          padding={2}
          marginRight={3}
          marginTop={-3}
        >
          <Box
            fontSize={30}
            onClick={lessSummaries}
            marginRight={3}
            sx={{
              border: "1px solid white",
              cursor: "pointer",
              "&:active": {
                borderleft: "1px solid black",
                borderTop: "1px solid black",
              },
            }}
          >
            {"<"}
          </Box>
          <Box
            fontSize={30}
            onClick={moreSummaries}
            marginLeft={3}
            sx={{
              border: "1px solid white",
              cursor: "pointer",
              "&:active": {
                borderleft: "1px solid black",
                borderTop: "1px solid black",
              },
            }}
          >
            {">"}
          </Box>
        </Box>
      </Box>
      {post && (
        <Box
          borderLeft="1px solid black"
          borderRight="1px solid black"
          paddingX={3}
          flex={3}
        >
          <Typography variant="h2" gutterBottom>
            {post[0].title}
          </Typography>

          {post.map((curr) => (
            <Post key={randomKeyGenerator()} text={curr.text} />
          ))}
          <Box marginBottom={2}>
            <Typography variant="caption">BM - {post[0].date}</Typography>
          </Box>
        </Box>
      )}
      <Box flex={1} />
    </Box>
  );
};
