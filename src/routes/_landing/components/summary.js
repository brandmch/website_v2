import { Paper, Box, Typography } from "@mui/material";

const Summary = () => {
  return (
    <Box marginBottom={4}>
      <Paper elevation={4} sx={{ backgroundColor: "#044A07" }}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom color="#FFFFFF">
            Welcome!
          </Typography>
          <hr />
          <Box display="flex" alignItems="center">
            <Box flex={10}>
              <Typography marginTop={3} color="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
            <Box flex={1}></Box>
            <Box
              flex={10}
              height={200}
              width={200}
              borderRadius={100}
              backgroundColor="white"
            ></Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Summary;
