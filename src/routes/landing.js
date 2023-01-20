import { Paper, Box, Typography } from "@mui/material";
import React from "react";
import AppBarCustom from "../components/appbar";

const Landing = () => {
  return (
    <div>
      <AppBarCustom />
      <Box sx={{ display: "flex", marginTop: "10px" }}>
        {/*  */}
        {/* LEFT COLUMN */}
        {/*  */}

        <Box sx={{ flex: 2, margin: "10px" }}>
          {/* CONTACT INFO */}
          <Paper elevation={2} sx={{ height: 100, width: "100%" }}>
            <Typography variant="h4" align="center">
              Brandon McHugh
            </Typography>
          </Paper>

          {/* SKILLS */}
          <Paper
            elevation={2}
            sx={{ height: 100, width: "100%", marginTop: "20px" }}
          >
            <Typography variant="h4" align="center">
              Skills
            </Typography>
          </Paper>

          {/* CERTIFICATIONS? */}
          <Paper
            elevation={2}
            sx={{ height: 100, width: "100%", marginTop: "20px" }}
          >
            <Typography variant="h4" align="center">
              Certifications?
            </Typography>
          </Paper>
        </Box>

        {/*  */}
        {/* RIGHT COLUMN */}
        {/*  */}

        <Box sx={{ flex: 5, margin: "10px" }}>
          {/* SUMMARY */}
          <Paper elevation={2} sx={{ height: 100, width: "100%" }}>
            <Typography variant="h4" align="center">
              Summary
            </Typography>
          </Paper>

          {/* EXPERIENCE */}
          <Paper
            elevation={2}
            sx={{ height: 100, width: "100%", marginTop: "20px" }}
          >
            <Typography variant="h4" align="center">
              Experience
            </Typography>
          </Paper>

          {/* EDUCATION */}
          <Paper
            elevation={2}
            sx={{ height: 100, width: "100%", marginTop: "20px" }}
          >
            <Typography variant="h4" align="center">
              Education
            </Typography>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
