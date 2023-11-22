import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { getSummaries } from "./hasura/getSummaries";
import { getSinglePost } from "./hasura/getPost";
import randomKeyGenerator from "../../utils/randomKeyGenerator";
import { useParams } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import AppBarCustom from "../../components/appbar";
import useWindowSize from "../../utils/useWindowSize";
import SearchBar from "./components/searchBar";

const CodeBlock = ({ text, width }) => {
  text = text[0].slice(14, text[0].length - 3);
  text = text.split("{{{{{n}}}}}");

  return (
    <Box
      borderRadius={1}
      backgroundColor="#F8F8F8"
      paddingX={1}
      paddingTop={1}
      paddingBottom={0.5}
      marginX={width > 600 ? 4 : 1}
      marginY={width > 600 ? 4 : width > 500 ? 3 : width > 400 ? 2 : 1}
      maxWidth="100vw"
      padding={2}
      key={randomKeyGenerator()}
      whiteSpace="nowrap"
      overflow="scroll"
    >
      {text.map((c) => {
        let temp = c.replace(/{{{{{doublequotes}}}}}/g, '"');
        temp = temp.replace(/{{{{{backslash}}}}}/g, "\\");
        let n = [...temp.matchAll(/{{{{{t}}}}}/g)].length;
        temp = temp.replace(/{{{{{t}}}}}/g, "");
        return (
          <Box key={randomKeyGenerator()} marginBottom={1} marginLeft={n * 2}>
            <code style={{ fontSize: 16, backgroundColor: "#F8F8F8" }}>
              {temp}
            </code>
          </Box>
        );
      })}
    </Box>
  );
};

const InlineCode = ({ text }) => {
  console.log(text);
  text = text.replace(/{{{{{doublequotes}}}}}/g, '"');
  text = text.replace(/{{{{{backslash}}}}}/g, "\\");

  text = text.split("```").map((c, i) => {
    const style = {
      fontSize: 15,
      backgroundColor: "#F8F8F8",
    };
    return i % 2 === 0
      ? c
      : React.createElement(
          "code",
          { style: style, key: randomKeyGenerator() },
          c
        );
  });

  return <Typography>{text}</Typography>;
};

const BulletListItem = ({ p }) => {
  console.log(p);
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
      <Typography fontSize={17}>{parseText(p)}</Typography>
    </Box>
  );
};

const Tab = ({ p }) => {
  return (
    <Box marginLeft={5}>
      <Typography>{p}</Typography>
    </Box>
  );
};

function parseText(text) {
  text = text.trim();
  if (text.startsWith("##")) {
    text = text.split("").slice(2).join("");
    return (
      <Typography variant="h4" marginY={3}>
        {text}
      </Typography>
    );
  } else if (/{{{{{b}}}}}/.test(text)) {
    console.log(text);
    text = text.split("").slice(11).join("");
    return <BulletListItem p={text} />;
  } else if (/```/.test(text)) {
    return <InlineCode text={text} />;
  } else if (text.startsWith("{{{{{t}}}}}")) {
    text = text.split("").slice(11).join("");
    return <Tab p={text} />;
  } else if (/@@@/.test(text)) {
    const startsWithBold = text[0] === "@";
    text = text.split("@@@").reduce((a, c) => {
      return c !== "" ? [...a, c] : a;
    }, []);
    if (startsWithBold) {
      return text.map((c, i) =>
        i % 2 === 0 ? (
          <Typography fontWeight="bold">{c}</Typography>
        ) : (
          <Typography>{c}</Typography>
        )
      );
    }
  }
  if (/{{{{{doublequotes}}}}}/.test(text) || /{{{{{backslash}}}}}/.test(text)) {
    text = text
      .replace(/{{{{{doublequotes}}}}}/g, '"')
      .replace(/{{{{{backslash}}}}}/g, "\\");
  }
  return text;
}

const Post = ({ text, width }) => {
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
      return <CodeBlock text={p} width={width} />;
    }

    return (
      <Box marginBottom={2}>
        <Typography fontSize={17}>{parseText(p)}</Typography>
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
  const [loading, setLoading] = useState(true);
  const { postid } = useParams();
  const { width } = useWindowSize();

  useEffect(() => {
    getSinglePost(postid)
      .then((x) => setPost(x.blog_blog_posts))
      .then((x) => setLoading(false));
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

  const Summary = ({ p }) => {
    return (
      <Box
        sx={{
          padding: 2,
          marginRight: width > 850 ? 3 : 0,

          borderBottom: "1px solid black",
          cursor: "pointer",
          overflow: "hidden",
        }}
        onClick={() => (window.location.href = `/blog/${p.time}/`)}
      >
        <Typography variant="h5">{p.title}</Typography>
        <Typography variant="subtitle2">{p.date}</Typography>
      </Box>
    );
  };

  const Summaries = () => {
    return (
      <Box>
        {summaries &&
          summaries.map((curr) => (
            <Summary key={randomKeyGenerator()} p={curr} />
          ))}
        <Box display="flex" justifyContent="center" padding={2} marginRight={3}>
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
    );
  };

  const Desktop = () => {
    return (
      <Box
        maxWidth="100vw"
        display="flex"
        justifyContent="center"
        flex={1}
        padding={3}
      >
        <Box flex={5} maxWidth="25vw" width="25vw">
          <Box
            sx={{
              paddingX: 1,
              paddingY: 2,
              marginRight: 3,
              paddingBottom: 3,
              borderBottom: "1px solid black",
            }}
          >
            <SearchBar />
          </Box>
          <Summaries />
        </Box>
        {post && (
          <Box
            flex={12}
            borderLeft="1px solid black"
            borderRight="1px solid black"
            paddingX={3}
            maxWidth="60vw"
            width="60vw"
          >
            {loading ? (
              <Typography className="swag" textAlign="center">
                LOADING...
              </Typography>
            ) : (
              <Box>
                <Typography variant="h2" gutterBottom>
                  {post[0].title}
                </Typography>

                {post.map((curr) => (
                  <Post
                    key={randomKeyGenerator()}
                    text={curr.text}
                    width={width}
                  />
                ))}
                <Box marginBottom={2}>
                  <Typography variant="caption">BM - {post[0].date}</Typography>
                </Box>
              </Box>
            )}
          </Box>
        )}
        <Box flex={3} width="15vw" maxWidth="15vw" padding={3} />
      </Box>
    );
  };

  const Mobile = () => {
    return (
      <Box minHeight="100vh" maxWidth="100vw" justifyContent="center">
        {loading ? (
          <Typography className="swag" textAlign="center" marginTop={3}>
            LOADING...
          </Typography>
        ) : null}
        {post && (
          <Box borderBottom="1px solid black" padding={3}>
            <Typography variant="h2" gutterBottom>
              {post[0].title}
            </Typography>

            {post.map((curr) => (
              <Post key={randomKeyGenerator()} text={curr.text} width={width} />
            ))}
            <Box marginBottom={2}>
              <Typography variant="caption">BM - {post[0].date}</Typography>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            marginRight: "auto",
            marginLeft: "auto",
            paddingX: 3,
            marginTop: 3,
            paddingBottom: 3,
            borderBottom: "1px solid black",
          }}
        >
          <SearchBar />
        </Box>
        <Summaries />
      </Box>
    );
  };

  return (
    <Box minHeight="100vh">
      <AppBarCustom />
      {width > 1000 ? <Desktop /> : <Mobile />}
    </Box>
  );
};
