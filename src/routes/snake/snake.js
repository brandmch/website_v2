import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import PlayArea from "./grid";

const SnakeHomeScreen = () => {
  return (
    <Box
      backgroundColor="black"
      alignItems="center"
      minHeight={"100vh"}
      display="flex"
      justifyContent="center"
    >
      <PlayArea />
    </Box>
  );
};

export default SnakeHomeScreen;
