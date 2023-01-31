import { Box, Typography, Paper } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CasinoIcon from "@mui/icons-material/Casino";
import GridViewIcon from "@mui/icons-material/GridView";
import HikingIcon from "@mui/icons-material/Hiking";
import List from "../../../utils/list";

const items = [
  ["Weight Lifting", <FitnessCenterIcon />],
  ["Reading", <AutoStoriesIcon />],
  ["Chess", <GridViewIcon />],
  ["Boardgames", <CasinoIcon />],
  ["Disc Golf", <HikingIcon />],
];

const Hobbies = () => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Hobbies
          </Typography>
          <hr />
          <List data={items} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Hobbies;
