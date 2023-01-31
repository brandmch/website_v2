import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import CodeIcon from "@mui/icons-material/Code";
import SmallInfoBox from "../../../utils/smallInfoBox";

const skills = [
  ["JavaScript", <JavascriptIcon fontSize="medium" />],
  ["React", <CodeIcon fontSize="medium" />],
  ["React Native", <CodeIcon fontSize="medium" />],
  ["HTML", <HtmlIcon fontSize="medium" />],
  ["CSS", <CssIcon fontSize="medium" />],
  ["Node.js", <CodeIcon fontSize="medium" />],
  ["VS Code", <CodeIcon fontSize="medium" />],
];

const Skills = () => {
  return <SmallInfoBox title="Languages & Frameworks" data={skills} />;
};

export default Skills;
