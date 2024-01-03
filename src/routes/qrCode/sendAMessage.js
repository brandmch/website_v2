import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import QRCode from "qrcode.react";

export const SendAMessage = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQRCode] = useState();

  const generateQRCode = () => {
    setQRCode(input);
    setInput(`http://brandon-mchugh.com/guessWhat/${input}`);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Box>
        <Typography variant="h3">Enter a message you'd like to send</Typography>
        <TextField label="Your message" value={input} onChange={(e) => setInput(e.target.value)} />
        <Button onClick={generateQRCode}>GO</Button>
        {qrCode && <QRCode value={input} />}
      </Box>
    </Box>
  );
};
