import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

function decodeMessage(encodedMessage) {
  let decodedResult = "";

  for (let i = 0; i < encodedMessage.length; i++) {
    const encodedCharCode = encodedMessage.charCodeAt(i);
    const decodedCharCode = encodedCharCode - 1;
    decodedResult += String.fromCharCode(decodedCharCode);
  }
  return decodedResult;
}

export const QRCodeMain = () => {
  const { message } = useParams();

  const decodedMessage = decodeMessage(message);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth="100vw"
      minHeight="100vh"
    >
      <Box>
        <Typography variant="h2" padding={3} style={{ wordBreak: "break-word", hyphens: "auto" }}>
          {decodedMessage}
        </Typography>
      </Box>
    </Box>
  );
};
