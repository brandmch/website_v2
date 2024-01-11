import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import QRCode from "qrcode.react";
import FooterCustom from "../../components/footer";

function encodeMessage(message) {
  let encodedResult = "";

  for (let i = 0; i < message.length; i++) {
    const originalCharCode = message.charCodeAt(i);
    const encodedCharCode = originalCharCode + 1;
    encodedResult += String.fromCharCode(encodedCharCode);
  }

  return encodeURIComponent(encodedResult);
}

export const SendAMessage = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQRCode] = useState();
  const [messageTooLong, setMessageTooLong] = useState(false);

  const generateQRCode = () => {
    setMessageTooLong(false);
    const encodedMessage = encodeMessage(input);
    if (encodedMessage.length > 2916) {
      setMessageTooLong(true);
    } else {
      setQRCode(`http://brandon-mchugh.com/guessWhat/${encodedMessage}`);
    }
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center" height="90vh" padding={2}>
        <Box>
          <Typography variant="h3">Enter a message you'd like to send</Typography>
          <Box display="flex" flexDirection="column" marginY={3}>
            <TextField
              label="Your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {messageTooLong && (
              <Typography variant="h6" fontWeight="bold" color="red">
                Message too long!
              </Typography>
            )}
            <Button
              onClick={generateQRCode}
              variant="outlined"
              sx={{ marginTop: 3, backgroundColor: "#F9FFFF" }}
            >
              Send message
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            {qrCode && <QRCode value={qrCode} />}
          </Box>
        </Box>
      </Box>
      <FooterCustom />
    </Box>
  );
};
