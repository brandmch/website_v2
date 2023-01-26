import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Paper, Box, Typography } from "@mui/material";

const ContactInfo = () => {
  return (
    <Box marginBottom={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Info
          </Typography>
          <hr />
          <Typography
            gutterBottom
            display="flex"
            alignItems="start"
            marginTop={3}
          >
            <Box marginRight={1}>
              <WorkIcon />
            </Box>
            Software Developer
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <SchoolIcon />
            </Box>
            Bachelor of Science
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <HomeIcon />
            </Box>
            Rockaway, New Jersey
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <LinkedInIcon />
            </Box>
            LinkedIn
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <GitHubIcon />
            </Box>
            GitHub
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <CallIcon />
            </Box>
            Contact me!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactInfo;
