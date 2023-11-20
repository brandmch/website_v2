import { Box, Typography } from "@mui/material";
import { getStrengths } from "./api";
import { useState, useEffect } from "react";

export const MainScreen = () => {
  const [strengths, setStrengths] = useState();

  useEffect(() => {
    getStrengths().then((x) => setStrengths(x));
  }, []);

  console.log(strengths);

  return (
    <Box
      minHeight="100vh"
      backgroundColor="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography color="white">FOOTBALL!</Typography>
    </Box>
  );
};
