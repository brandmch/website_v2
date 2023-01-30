import { Paper, Box, Typography } from "@mui/material";

const picOfMe = require("../../../utils/picOfMe.jpg");

const MobilePic = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center" marginTop={1}>
      <img
        src={picOfMe}
        alt="HeadShot"
        width={200}
        height={200}
        style={{
          borderRadius: 100,
        }}
      />
    </Box>
  );
};

const DesktopPic = () => {
  return (
    <img
      src={picOfMe}
      alt="HeadShot"
      width={200}
      height={200}
      style={{
        borderRadius: 100,
      }}
    />
  );
};

const Pic = ({ width }) => {
  return width > 1000 ? (
    <DesktopPic />
  ) : width > 900 ? (
    <MobilePic />
  ) : width > 550 ? (
    <DesktopPic />
  ) : (
    <MobilePic />
  );
};

const Summary = ({ width }) => {
  return (
    <Box marginBottom={4}>
      <Paper elevation={4} sx={{ backgroundColor: "#044A07" }}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom color="#FFFFFF">
            Welcome!
          </Typography>
          <hr />
          <Box
            display={
              width > 1000
                ? "flex"
                : width > 900
                ? null
                : width > 550
                ? "flex"
                : null
            }
            alignItems="center"
          >
            <Box flex={20}>
              <Typography marginTop={3} color="white" textAlign="justify">
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
            {width > 355 ? <Pic width={width} /> : ""}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Summary;
