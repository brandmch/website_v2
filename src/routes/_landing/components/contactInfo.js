import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Paper, Box, Typography } from "@mui/material";

const info = [
  ["Software Developer", <WorkIcon />],
  ["Bachelor of Science", <SchoolIcon />],
  ["Rockaway, New Jersey", <HomeIcon />],
  ["LinkedIn", <LinkedInIcon />],
  ["GitHub", <GitHubIcon />],
  ["brandonmchugh46@gmail.com", <EmailIcon />],
  ["Contact me!", <CallIcon />],
];

const List = () => {
  return info.map(([title, icon]) => {
    return (
      <Typography gutterBottom display="flex" alignItems="start">
        <Box marginRight={1}>{icon}</Box>
        {title}
      </Typography>
    );
  });
};

const ContactInfo = () => {
  return (
    <Box marginBottom={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Info
          </Typography>
          <hr />
          <List />
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactInfo;
