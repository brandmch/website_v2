import { Box, Typography, Divider } from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";
import { difficulty } from "../utils";

export const Scores = ({ scores, numBombs }) => {
  const scoresToDisplay = scores
    .filter((c) => c.difficulty === difficulty(numBombs))
    .sort((a, b) => a.score - b.score)
    .map((c) => (
      <Box key={randomKeyGenerator()}>
        <Box
          display="flex"
          flex={1}
          alignItems="center"
          margin="5px 10px 5px 10px"
        >
          <Typography color="#FFFFFF" flex={10}>
            {c.name}
          </Typography>

          <Typography
            color="#FFFFFF"
            flex={1}
            display="flex"
            justifyContent="flex-end"
          >
            {c.score}
          </Typography>
        </Box>
        <Divider
          sx={{ backgroundColor: "#FFFFFF", margin: "0px 10px 0px 10px" }}
        />
      </Box>
    ));

  return (
    <Box border="solid 1px #FFFFFF">
      <Typography color="#FFFFFF" align="center" variant="h3">
        SCORES
      </Typography>
      <Typography color="#FFFFFF" align="center">
        in seconds
      </Typography>
      {scores && scoresToDisplay}
    </Box>
  );
};
