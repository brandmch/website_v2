import { Paper, Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

const certs = [
  [
    "Back End Development and APIs",
    "https://www.freecodecamp.org/certification/brandmch/back-end-development-and-apis",
  ],
  [
    "Front End Development Libraries",
    "https://www.freecodecamp.org/certification/brandmch/front-end-development-libraries",
  ],
  [
    "Responsive Web Design",
    "https://www.freecodecamp.org/certification/brandmch/responsive-web-design",
  ],
  [
    "JavaScript Algorithms and Data Structures",
    "https://www.freecodecamp.org/certification/brandmch/javascript-algorithms-and-data-structures",
  ],
];

const Links = () => {
  return certs.map(([title, url]) => {
    return (
      <Box display="flex" marginBottom={0.75}>
        <Typography alignItems="start" display="flex" flex={10}>
          <Box marginRight={1}>
            <CodeIcon fontSize="medium" />
          </Box>
          {title}{" "}
        </Typography>
        <Typography textAlign="flex-end" flex={1} paddingLeft={1}>
          <a href={url} target="_blank">
            (FCC)
          </a>
        </Typography>
      </Box>
    );
  });
};

const Certifications = () => {
  return (
    <Box marginBottom={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Certifications
          </Typography>
          <hr />
          <Links />
        </Box>
      </Paper>
    </Box>
  );
};

export default Certifications;
