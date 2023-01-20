import { Paper, Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import CodeIcon from "@mui/icons-material/Code";
import React from "react";
import AppBarCustom from "../components/appbar";

const Landing = () => {
  return (
    <div>
      <AppBarCustom />
      <Box display={"flex"} marginTop={2}>
        {/*  */}
        {/* LEFT COLUMN */}
        {/*  */}

        <Box flex={2} margin={2}>
          {/* CONTACT INFO */}
          <Box marginBottom={2}>
            <Paper elevation={2}>
              <Box paddingTop={2}>
                <Typography variant="h4" align="center" gutterBottom>
                  Brandon McHugh
                </Typography>
              </Box>
              <hr />
              <Typography gutterBottom>
                <WorkIcon />
                Software Developer
              </Typography>
              <Typography gutterBottom>
                <SchoolIcon />
                Bachelor of Science
              </Typography>
              <Typography gutterBottom>
                <HomeIcon />
                Rockaway, New Jersey
              </Typography>
              <Typography gutterBottom>
                <CallIcon />
                Contact me
              </Typography>
            </Paper>
          </Box>

          {/* SKILLS */}
          <Box marginBottom={2} marginTop={2}>
            <Paper elevation={2}>
              <Box paddingTop={2}>
                <Typography variant="h4" align="center" gutterBottom>
                  Languages and Frameworks
                </Typography>
              </Box>
              <hr />
              <Typography>
                <JavascriptIcon fontSize="medium" />
                JavaScript
              </Typography>
              <Typography>
                <CodeIcon fontSize="medium" />
                React
              </Typography>
              <Typography>
                <CodeIcon fontSize="medium" />
                React Native
              </Typography>
              <Typography>
                <HtmlIcon fontSize="medium" />
                HTML
              </Typography>
              <Typography>
                <CssIcon fontSize="medium" />
                CSS
              </Typography>
              <Typography>
                <CodeIcon fontSize="medium" />
                Node.js
              </Typography>
              <Typography>
                <CodeIcon fontSize="medium" />
                VS Code
              </Typography>
            </Paper>
          </Box>

          {/* CERTIFICATIONS? */}
          <Box marginBottom={2} marginTop={2}>
            <Paper elevation={2}>
              <Box paddingTop={2}>
                <Typography variant="h4" align="center" gutterBottom>
                  Certifications?
                </Typography>
              </Box>
              <hr />
            </Paper>
          </Box>
        </Box>

        {/*  */}
        {/* RIGHT COLUMN */}
        {/*  */}

        <Box flex={5} margin={2}>
          {/* SUMMARY */}
          <Box marginBottom={2}>
            <Paper>
              <Box paddingTop={2}>
                <Typography variant="h4" align="center" gutterBottom>
                  Summary
                </Typography>
              </Box>
              <hr />
            </Paper>
          </Box>

          {/* EXPERIENCE */}
          <Box marginBottom={2} marginTop={2}>
            <Paper elevation={2}>
              <Box paddingTop={2}>
                <Typography variant="h4" align="center" gutterBottom>
                  Experience
                </Typography>
              </Box>
              <hr />
            </Paper>
          </Box>

          {/* EDUCATION */}
          <Box marginBottom={2} marginTop={2}>
            <Paper elevation={2}>
              <Box paddingTop={2}>
                <Typography variant="h4" align="center" gutterBottom>
                  Education
                </Typography>
              </Box>
              <hr />
            </Paper>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
