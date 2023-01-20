import { Paper, Box, Typography } from "@mui/material";
import { height } from "@mui/system";
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
          <Box>
            <Paper elevation={2}>
              <Box paddingTop={2}>
                <Typography variant="h4" align="center" gutterBottom>
                  Brandon McHugh
                </Typography>
              </Box>
              <hr />
            </Paper>
          </Box>

          {/* SKILLS */}
          <Box>
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
          <Box>
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
          <Box>
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
          <Box>
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
          <Box>
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
