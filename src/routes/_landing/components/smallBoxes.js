import React from "react";

import SmallInfoBox from "./smallInfoBox";

// All Icons
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CasinoIcon from "@mui/icons-material/Casino";
import GridViewIcon from "@mui/icons-material/GridView";
import HikingIcon from "@mui/icons-material/Hiking";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";

const certs = [
  [
    "Back End Development and APIs",
    <CodeIcon fontSize="medium" />,
    "https://www.freecodecamp.org/certification/brandmch/back-end-development-and-apis",
  ],
  [
    "Front End Development Libraries",
    <CodeIcon fontSize="medium" />,
    "https://www.freecodecamp.org/certification/brandmch/front-end-development-libraries",
  ],
  [
    "Responsive Web Design",
    <CodeIcon fontSize="medium" />,
    "https://www.freecodecamp.org/certification/brandmch/responsive-web-design",
  ],
  [
    "JavaScript Algorithms and Data Structures",
    <CodeIcon fontSize="medium" />,
    "https://www.freecodecamp.org/certification/brandmch/javascript-algorithms-and-data-structures",
  ],
];

const Certifications = () => {
  return <SmallInfoBox title="Certifications" data={certs} />;
};

const info = [
  ["Software Developer", <WorkIcon />],
  ["Bachelor of Science", <SchoolIcon />],
  ["Rockaway, New Jersey", <HomeIcon />],
  ["LinkedIn", <LinkedInIcon />],
  ["GitHub", <GitHubIcon />],
  ["brandonmchugh46@gmail.com", <EmailIcon />],
  ["Contact me!", <CallIcon />],
];

const ContactInfo = () => {
  return <SmallInfoBox title="Info" data={info} marginTop={0} />;
};

const skills = [
  ["JavaScript", <JavascriptIcon fontSize="medium" />],
  ["React", <CodeIcon fontSize="medium" />],
  ["React Native", <CodeIcon fontSize="medium" />],
  ["MUI", <CodeIcon fontSize="medium" />],
  ["HTML", <HtmlIcon fontSize="medium" />],
  ["CSS", <CssIcon fontSize="medium" />],
  ["Node.js", <CodeIcon fontSize="medium" />],
  ["VS Code", <CodeIcon fontSize="medium" />],
];

const Skills = () => {
  return <SmallInfoBox title="Languages & Frameworks" data={skills} />;
};

const projects = [
  ,
  ["Snake", <CodeIcon />, "/snake"],
  ["Social", <CodeIcon />, "/social"],
  ["Minesweeper", <CodeIcon />, "/minesweeper"],
  ["Weather App", <CodeIcon />, "/weather"],
  ["Timer", <CodeIcon />, "/timer"],
  ["JavaScript Calculator", <CodeIcon />, "/javascriptcalulator"],
  ["Drum Machine", <CodeIcon />, "/drummachine"],
  ["Markdown Previewer", <CodeIcon />, "/markdownpreviewer"],
  ["Random Quote Machine", <CodeIcon />, "/randomquotemachine"],
];

const Projects = () => {
  return <SmallInfoBox title="Projects" data={projects} />;
};

const items = [
  ["Weight Lifting", <FitnessCenterIcon />],
  ["Reading", <AutoStoriesIcon />],
  ["Chess", <GridViewIcon />],
  ["Boardgames", <CasinoIcon />],
  ["Disc Golf", <HikingIcon />],
];

const Hobbies = () => {
  return <SmallInfoBox title="Hobbies" data={items} />;
};

export { Certifications, ContactInfo, Skills, Projects, Hobbies };
