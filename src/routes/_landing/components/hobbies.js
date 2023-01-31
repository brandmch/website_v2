import { Box, Typography, Paper, Divider } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CasinoIcon from "@mui/icons-material/Casino";
import GridViewIcon from "@mui/icons-material/GridView";
import HikingIcon from "@mui/icons-material/Hiking";

const items = [
  ["Weight Lifting", <FitnessCenterIcon />],
  ["Reading", <AutoStoriesIcon />],
  ["Chess", <GridViewIcon />],
  ["Boardgames", <CasinoIcon />],
  ["Disc Golf", <HikingIcon />],
];

const List = () => {
  return items.map(([title, icon]) => {
    return (
      <Typography gutterBottom display="flex" alignItems="start">
        <Box marginRight={1}>{icon}</Box>
        {title}
      </Typography>
    );
  });
};

const Hobbies = () => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Hobbies
          </Typography>
          <hr />
          <List />
        </Box>
      </Paper>
    </Box>
  );
};

export default Hobbies;
