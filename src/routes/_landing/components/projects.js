import { Paper, Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

const projects = [
  ["Drum Machine", "/drummachine"],
  ["JavaScript Calculator", "/javascriptcalulator"],
  ["Markdown Previewer", "/markdownpreviewer"],
  ["Random Quote Machine", "/randomquotemachine"],
  ["Timer", "/timer"],
];

const List = () => {
  return projects.map(([title, url]) => {
    return (
      <Typography gutterBottom display="flex" alignItems="start">
        <Box marginRight={1}>
          <CodeIcon />
        </Box>
        <a href={url}>{title}</a>
      </Typography>
    );
  });
};

const Projects = () => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Projects
          </Typography>
          <hr />
          <List />
        </Box>
      </Paper>
    </Box>
  );
};

export default Projects;
