import { Box, Typography, Divider } from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";

export const DifficultyBar = ({ setState, numBombs }) => {
  const { setNumBombs } = setState;
  const levels = [
    [5, "PRACTICE"], // CHANGE BACK TO 10
    [15, "EASY"],
    [25, "MEDIUM"],
    [35, "HARD"],
    [50, "IMPOSSIBLE"],
  ];

  const Difficulty = ({ x, y }) => {
    return (
      <Box
        onClick={() => {
          setNumBombs(x);
        }}
        margin="5px 10px 5px 10px"
        textAlign="center"
      >
        <Typography
          color={x === numBombs ? "#00FF4A" : "#FFFFFF"}
          fontSize={20}
        >
          {y}
        </Typography>
        {y !== "IMPOSSIBLE" ? (
          <Divider
            sx={{ backgroundColor: "#FFFFFF", margin: "5px 5px 5px 5px" }}
          />
        ) : null}
      </Box>
    );
  };

  return (
    <Box border="solid 1px #FFFFFF" width={210}>
      {levels.map((curr) => (
        <Difficulty x={curr[0]} y={curr[1]} key={randomKeyGenerator()} />
      ))}
    </Box>
  );
};
