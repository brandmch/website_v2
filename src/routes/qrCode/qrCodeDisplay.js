import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

export const QRCodeMain = () => {
  const { message } = useParams();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h1">{message}</Typography>
    </Box>
  );
};
