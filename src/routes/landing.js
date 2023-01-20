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
          <Paper elevation={2} sx={{ height: 100, width: "100%" }}>
            <Typography variant="h4">Brandon McHugh</Typography>
          </Paper>
          <Paper
            elevation={2}
            sx={{ height: 100, width: "100%", marginTop: "20px" }}
          ></Paper>
          <Paper
            elevation={2}
            sx={{ height: 100, width: "100%", marginTop: "20px" }}
          ></Paper>
        </Box>
        {/*  */}
        {/* RIGHT COLUMN */}
        {/*  */}
        <Box sx={{ flex: 5, margin: "10px" }}>
          <Paper elevation={2} sx={{ height: 100, width: "100%" }}></Paper>
          <Paper
            elevation={2}
            sx={{ height: 100, width: "100%", marginTop: "20px" }}
          ></Paper>{" "}
          <Paper
            elevation={2}
            sx={{ height: 100, width: "100%", marginTop: "20px" }}
          ></Paper>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
