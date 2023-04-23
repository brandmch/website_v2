import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { startFetchMyQuery } from "../hasura/query";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";

export const Scores = ({ time }) => {
  const [scores, setScores] = useState();

  useEffect(() => {
    startFetchMyQuery().then((x) => setScores(x.MinesweeperScores));
  }, []);

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
