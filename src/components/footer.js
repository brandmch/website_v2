import React from "react";
import { Box, Typography } from "@mui/material";

const FooterCustom = ({ url, style = { color: "#000000" } }) => {
  return (
    <Box textAlign="center" paddingBottom={1} sx={style}>
      <Typography>Brandon McHugh 2023</Typography>
      <Typography>
        <a href={url} target="_blank" style={{ color: style.color }}>
          GitHub
        </a>
      </Typography>
    </Box>
  );
};

export default FooterCustom;
