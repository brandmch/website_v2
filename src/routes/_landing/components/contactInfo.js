import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Paper, Box, Typography } from "@mui/material";
import List from "../../../utils/list";
import SmallInfoBox from "../../../utils/smallInfoBox";

const info = [
  ["Software Developer", <WorkIcon />],
  ["Bachelor of Science", <SchoolIcon />],
  ["Rockaway, New Jersey", <HomeIcon />],
  ["LinkedIn", <LinkedInIcon />],
  ["GitHub", <GitHubIcon />],
  ["brandonmchugh46@gmail.com", <EmailIcon />],
  ["Contact me!", <CallIcon />],
];

const ContactInfo = () => {
  return <SmallInfoBox title="Info" data={info} marginTop={0} />;
};

export default ContactInfo;
