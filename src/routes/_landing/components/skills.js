import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import CodeIcon from "@mui/icons-material/Code";

import { Paper, Box, Typography } from "@mui/material";

const Skills = () => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Languages and Frameworks
          </Typography>
          <hr />
          <Typography
            gutterBottom
            display="flex"
            alignItems="start"
            marginTop={3}
          >
            <Box marginRight={1}>
              <JavascriptIcon fontSize="medium" />
            </Box>
            JavaScript
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <CodeIcon fontSize="medium" />
            </Box>
            React
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <CodeIcon fontSize="medium" />
            </Box>
            React Native
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <HtmlIcon fontSize="medium" />
            </Box>
            HTML
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <CssIcon fontSize="medium" />
            </Box>
            CSS
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <CodeIcon fontSize="medium" />
            </Box>
            Node.js
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <CodeIcon fontSize="medium" />
            </Box>
            VS Code
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Skills;
