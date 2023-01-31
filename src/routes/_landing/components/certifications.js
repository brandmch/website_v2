import { Paper, Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import List from "../../../utils/list";
import SmallInfoBox from "../../../utils/smallInfoBox";

const certs = [
  [
    "Back End Development and APIs",
    <CodeIcon fontSize="medium" />,
    "https://www.freecodecamp.org/certification/brandmch/back-end-development-and-apis",
  ],
  [
    "Front End Development Libraries",
    <CodeIcon fontSize="medium" />,
    "https://www.freecodecamp.org/certification/brandmch/front-end-development-libraries",
  ],
  [
    "Responsive Web Design",
    <CodeIcon fontSize="medium" />,
    "https://www.freecodecamp.org/certification/brandmch/responsive-web-design",
  ],
  [
    "JavaScript Algorithms and Data Structures",
    <CodeIcon fontSize="medium" />,
    "https://www.freecodecamp.org/certification/brandmch/javascript-algorithms-and-data-structures",
  ],
];

const Certifications = () => {
  return <SmallInfoBox title="Certifications" data={certs} />;
};

export default Certifications;
