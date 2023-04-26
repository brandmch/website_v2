import { Box, Button } from "@mui/material";

const HomeScreen = () => {
  return (
    <Box backgroundColor="#000000" height="100vh">
      <Button
        variant="contained"
        onClick={() => (window.location.href = "/social/signup")}
      >
        Sign Up!
      </Button>
      <Button
        variant="contained"
        onClick={() => (window.location.href = "/social/login")}
      >
        Login!
      </Button>
    </Box>
  );
};

export default HomeScreen;
