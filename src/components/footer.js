import React from "react";
import { Box, Typography } from "@mui/material";

const FooterCustom = ({ url }) => {
  return (
    <Box textAlign="center" marginBottom={1}>
      <Typography>Brandon McHugh 2023</Typography>
      <Typography>
        <a href={url} target="_blank">
          GitHub
        </a>
      </Typography>
    </Box>
  );
};

export default FooterCustom;
