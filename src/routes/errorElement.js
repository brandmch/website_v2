import { Box, Typography } from "@mui/material";

const ErrorElement = () => {
  return (
    <Box
      backgroundColor="background.primary"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2" gutterBottom>
        Uh oh!
      </Typography>
      <Typography variant="h6">Something went wrong!</Typography>
    </Box>
  );
};

export default ErrorElement;
