import { Box, Typography, Button } from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";

export const Scores = ({ scores }) => {
  return (
    <Box>
      <Typography color="#FFFFFF">SCORES</Typography>
      {scores &&
        scores
          .sort((a, b) => a.score - b.score)
          .map((c) => (
            <Typography key={randomKeyGenerator()} color="#FFFFFF">
              {c.name}: {c.score}
            </Typography>
          ))}
    </Box>
  );
};
