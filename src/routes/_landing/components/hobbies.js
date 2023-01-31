import { Box, Typography, Paper } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CasinoIcon from "@mui/icons-material/Casino";
import GridViewIcon from "@mui/icons-material/GridView";
import HikingIcon from "@mui/icons-material/Hiking";

const Hobbies = () => {
  return (
    <Box marginBottom={4} marginTop={4}>
      <Paper elevation={4}>
        <Box padding={2.5}>
          <Typography variant="h4" align="center" gutterBottom>
            Hobbies
          </Typography>
          <hr />
          <Typography
            gutterBottom
            display="flex"
            alignItems="start"
            marginTop={3}
          >
            <Box marginRight={1}>
              <FitnessCenterIcon />
            </Box>
            Weight Lifting
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <AutoStoriesIcon />
            </Box>
            Reading
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <GridViewIcon />
            </Box>
            Chess
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <CasinoIcon />
            </Box>
            Boardgames
          </Typography>
          <Typography gutterBottom display="flex" alignItems="start">
            <Box marginRight={1}>
              <HikingIcon />
            </Box>
            Disc Golf
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Hobbies;
