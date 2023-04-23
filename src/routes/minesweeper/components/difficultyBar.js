import { Box, Typography } from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";

export const DifficultyBar = ({ setState, numBombs }) => {
  const { setNumBombs } = setState;
  const levels = [
    [10, "PRACTICE"],
    [20, "EASY"],
    [35, "MEDIUM"],
    [50, "HARD"],
    [65, "IMPOSSIBLE"],
  ];

  const Difficulty = ({ x, y }) => {
    return (
      <Box
        border="solid 1px #FFFFFF"
        onClick={() => {
          setNumBombs(x);
        }}
      >
        <Typography color={x === numBombs ? "#00FF4A" : "#FFFFFF"}>
          {y}
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      {levels.map((curr) => (
        <Difficulty x={curr[0]} y={curr[1]} key={randomKeyGenerator()} />
      ))}
    </Box>
  );
};
