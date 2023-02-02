import { Paper, Box, Typography } from "@mui/material";

const picOfMe = require("../../../utils/picOfMe.jpg");

const MobilePic = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center" marginTop={2}>
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
  return width > 750 ? <DesktopPic /> : <MobilePic />;
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
          <Box display={width > 750 ? "flex" : null} alignItems="center">
            <Box flex={20}>
              <Typography marginTop={3} color="white" textAlign="justify">
                I specialize in web and mobile development, creating solid and
                scalable products with great user experiences. Highly skilled in
                several frontend technologies, web scripting, and UI
                Engineering.
              </Typography>
              <Typography marginTop={3} color="white" textAlign="justify">
                I am an independent self-starter and a reliable team-player with
                strong interpersonal skills, demonstrated team-leadership
                abilities, and a passion for achieving goals.
              </Typography>
              <Typography marginTop={3} color="white" textAlign="justify">
                Constantly looking to learn new things and develop new skills.
                Motivated, quick thinker, eager to accept new challenges and
                explore new territory.
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
