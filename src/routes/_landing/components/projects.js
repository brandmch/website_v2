import { Paper, Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import List from "../../../utils/list";

const projects = [
  ["Drum Machine", <CodeIcon />, "/drummachine"],
  ["JavaScript Calculator", <CodeIcon />, "/javascriptcalulator"],
  ["Markdown Previewer", <CodeIcon />, "/markdownpreviewer"],
  ["Random Quote Machine", <CodeIcon />, "/randomquotemachine"],
  ["Timer", <CodeIcon />, "/timer"],
];

const Projects = () => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Projects
          </Typography>
          <hr />
          <List data={projects} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Projects;
