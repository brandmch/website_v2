import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

export const QRCodeMain = () => {
  const { message } = useParams();
  const [{ width, height }, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh" maxWidth="100vw">
      <Typography
        variant={width < 350 ? "h3" : width < 700 ? "h2" : "h1"}
        padding={3}
        style={{ wordBreak: "break-word", hyphens: "auto" }}
      >
        {message}
      </Typography>
    </Box>
  );
};
