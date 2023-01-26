import { Paper, Box, Typography } from "@mui/material";

const Certifications = () => {
  return (
    <Box marginBottom={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Certifications
          </Typography>
          <hr />
          <Typography gutterBottom marginTop={3}>
            Back End Development and APIs{" "}
            <a
              href="https://www.freecodecamp.org/certification/brandmch/back-end-development-and-apis"
              target="_blank"
            >
              (FCC)
            </a>
          </Typography>
          <Typography gutterBottom>
            Front End Development Libraries{" "}
            <a
              href="https://www.freecodecamp.org/certification/brandmch/front-end-development-libraries"
              target="_blank"
            >
              (FCC)
            </a>
          </Typography>
          <Typography gutterBottom>
            Responsive Web Design{" "}
            <a
              href="https://www.freecodecamp.org/certification/brandmch/responsive-web-design"
              target="_blank"
            >
              (FCC)
            </a>
          </Typography>
          <Typography gutterBottom>
            JavaScript Algorithms and Data Structures{" "}
            <a
              href="https://www.freecodecamp.org/certification/brandmch/javascript-algorithms-and-data-structures"
              target="_blank"
            >
              (FCC)
            </a>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Certifications;
