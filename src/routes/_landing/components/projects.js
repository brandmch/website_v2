import CodeIcon from "@mui/icons-material/Code";
import SmallInfoBox from "../../../utils/smallInfoBox";

const projects = [
  ["Drum Machine", <CodeIcon />, "/drummachine"],
  ["JavaScript Calculator", <CodeIcon />, "/javascriptcalulator"],
  ["Markdown Previewer", <CodeIcon />, "/markdownpreviewer"],
  ["Random Quote Machine", <CodeIcon />, "/randomquotemachine"],
  ["Timer", <CodeIcon />, "/timer"],
];

const Projects = () => {
  return <SmallInfoBox title="Projects" data={projects} />;
};

export default Projects;
