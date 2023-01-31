import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CasinoIcon from "@mui/icons-material/Casino";
import GridViewIcon from "@mui/icons-material/GridView";
import HikingIcon from "@mui/icons-material/Hiking";
import SmallInfoBox from "../../../utils/smallInfoBox";

const items = [
  ["Weight Lifting", <FitnessCenterIcon />],
  ["Reading", <AutoStoriesIcon />],
  ["Chess", <GridViewIcon />],
  ["Boardgames", <CasinoIcon />],
  ["Disc Golf", <HikingIcon />],
];

const Hobbies = () => {
  return <SmallInfoBox title="Hobbies" data={items} />;
};

export default Hobbies;
