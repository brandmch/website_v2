import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import CodeIcon from "@mui/icons-material/Code";

import { Paper, Box, Typography } from "@mui/material";

const skills = [
  ["JavaScript", <JavascriptIcon fontSize="medium" />],
  ["React", <CodeIcon fontSize="medium" />],
  ["React Native", <CodeIcon fontSize="medium" />],
  ["HTML", <HtmlIcon fontSize="medium" />],
  ["CSS", <CssIcon fontSize="medium" />],
  ["Node.js", <CodeIcon fontSize="medium" />],
  ["VS Code", <CodeIcon fontSize="medium" />],
];

const List = () => {
  return skills.map(([title, icon]) => {
    return (
      <Typography gutterBottom display="flex" alignItems="start">
        <Box marginRight={1}>{icon}</Box>
        {title}
      </Typography>
    );
  });
};

const Skills = () => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Languages and Frameworks
          </Typography>
          <hr />
          <List />
        </Box>
      </Paper>
    </Box>
  );
};

export default Skills;
