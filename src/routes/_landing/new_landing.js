import React from "react";
import { useState } from "react";
import { Box, Divider, IconButton, Typography, makeStyles } from "@mui/material";
import AppBarCustom from "../../components/appbar";
import "./landing.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { QuoteBox } from "../randomQuoteMachine/randomQuoteMachine";
import { randomColor } from "../../utils/randomColor";

const SuperSimpleScrum = () => {
  const pic = require("./pictures/superSimpleScrum.png");
  return (
    <Box display="flex">
      <Box>
        <Typography>SuperSimpleScrum</Typography>
      </Box>

      <Box>
        <img width={600} height={400} src={pic} alt="Description" />
      </Box>
    </Box>
  );
};
const Blog = () => {
  const pic = require("./pictures/blog.png");
  return (
    <Box>
      <Typography>Blog</Typography>{" "}
      <Box>
        <img width={700} height={400} src={pic} alt="Description" />
      </Box>
    </Box>
  );
};
const Social = () => {
  const pic = require("./pictures/social.png");
  return (
    <Box>
      <Typography>Social</Typography>{" "}
      <Box>
        <img width={600} height={400} src={pic} alt="Description" />
      </Box>
    </Box>
  );
};
const Minesweeper = () => {
  const pic = require("./pictures/minesweeper.png");
  return (
    <Box>
      <Typography>Minesweeper</Typography>{" "}
      <Box>
        <img width={600} height={400} src={pic} alt="Description" />
      </Box>
    </Box>
  );
};
const WeatherApp = () => {
  const pic = require("./pictures/weatherapp.png");
  return (
    <Box>
      <Typography>Weather App</Typography>{" "}
      <Box>
        <img width={600} height={400} src={pic} alt="Description" />
      </Box>
    </Box>
  );
};
const Timer = () => {
  const pic = require("./pictures/timer.png");
  return (
    <Box>
      <Typography>Timer</Typography>{" "}
      <Box>
        <img width={600} height={400} src={pic} alt="Description" />
      </Box>
    </Box>
  );
};
const Calculator = () => {
  const pic = require("./pictures/calculator.png");
  return (
    <Box>
      <Typography>Calculator</Typography>{" "}
      <Box>
        <img width={600} height={400} src={pic} alt="Description" />
      </Box>
    </Box>
  );
};
const DrumMachine = () => {
  const pic = require("./pictures/drummachine.png");
  return (
    <Box>
      <Typography>Drum Machine</Typography>{" "}
      <Box>
        <img width={600} height={400} src={pic} alt="Description" />
      </Box>
    </Box>
  );
};
const MarkdownPreviewer = () => {
  const pic = require("./pictures/markdownpreviewer.png");
  return (
    <Box>
      <Typography>Markdown Previewer</Typography>{" "}
      <Box>
        <img width={600} height={400} src={pic} alt="Description" />
      </Box>
    </Box>
  );
};
const RandomQuoteMachine = () => {
  const [bgColor, setBGColor] = useState(randomColor());
  return (
    <Box
      display="flex"
      sx={{
        backgroundImage: `linear-gradient(to bottom right, ${bgColor}, rgb(255, 255, 255))`,
      }}
      alignItems="center"
      justifyContent="center"
    >
      <QuoteBox backgroundColor={bgColor} setBGColor={setBGColor} />
    </Box>
  );
};

//
//
//
//
//

export const NewLanding = () => {
  const [projectDisplayed, setProjectDisplayed] = React.useState(0);
  const projects = [
    <SuperSimpleScrum />,
    <Blog />,
    <Social />,
    <Minesweeper />,
    <WeatherApp />,
    <Timer />,
    <Calculator />,
    <DrumMachine />,
    <MarkdownPreviewer />,
    <RandomQuoteMachine />,
  ];

  function slideProject(direc) {
    switch (direc) {
      case "left":
        if (projectDisplayed > 0) {
          setProjectDisplayed((prev) => prev - 1);
        }
        break;
      case "right":
        if (projectDisplayed < projects.length - 1) {
          setProjectDisplayed((prev) => prev + 1);
        }
        break;
    }
  }

  return (
    <Box>
      <AppBarCustom />
      <Box display="flex" flexDirection="column" alignItems="center" marginY={6}>
        <Typography variant="h2">Professional Full-Stack Developer</Typography>
      </Box>
      {/* Grey boxes */}
      <Box display="flex">
        <Box flex={1} />
        <Box flex={5} display="flex" justifyContent="space-between" marginX={10}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            height={400}
            width={300}
            backgroundColor="#F7F7FF"
            borderRadius={1}
          >
            <Typography marginTop={2} variant="h5" sx={{ marginLeft: "auto", marginRight: "auto" }}>
              Info
            </Typography>
            <Divider sx={{ marginX: 5 }} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            height={400}
            width={300}
            backgroundColor="#F7F7FF"
            borderRadius={1}
          >
            <Typography marginTop={2} variant="h5" sx={{ marginLeft: "auto", marginRight: "auto" }}>
              Skills
            </Typography>
            <Divider sx={{ marginX: 5 }} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            height={400}
            width={300}
            backgroundColor="#F7F7FF"
            borderRadius={1}
          >
            <Typography marginTop={2} variant="h5" sx={{ marginLeft: "auto", marginRight: "auto" }}>
              Certs
            </Typography>
            <Divider sx={{ marginX: 5 }} />
          </Box>
        </Box>
        <Box flex={1} />
      </Box>
      {/* Projects */}
      <Box
        display="flex"
        height="80vh"
        width="90vw"
        margin={5}
        marginLeft="auto"
        marginRight="auto"
        // backgroundColor="#F7F7FF"
        borderRadius={1}
        alignItems="center"
      >
        <Box>
          <IconButton onClick={() => slideProject("left")}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>

        <Box width="90vw" height="80vh">
          {projects[projectDisplayed]}
        </Box>

        <Box>
          <IconButton onClick={() => slideProject("right")}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
