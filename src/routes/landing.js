import { Paper, Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
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
                  Skills
                </Typography>
              </Box>
              <hr />
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
