import { Paper, Box, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Projects
          </Typography>
          <hr />
          <Typography gutterBottom marginTop={3}>
            <a href="/drummachine">Drum Machine</a>
          </Typography>
          <Typography gutterBottom>
            <a href="/javascriptcalulator">JavaScript Calculator</a>
          </Typography>
          <Typography gutterBottom>
            <a href="/markdownpreviewer">Markdown Previewer</a>
          </Typography>
          <Typography gutterBottom>
            <a href="/randomquotemachine">Random Quote Machine</a>
          </Typography>
          <Typography gutterBottom>
            <a href="/timer">Timer</a>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Projects;
