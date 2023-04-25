import { Box, Typography, Divider } from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";
import { EnterScoreBox } from "./enterScoreBox";
import { difficulty } from "../utils";

export const Scores = ({ state, setState }) => {
  const { scores, numBombs, time, enterScore, won } = state;
  const { setTime, setEnterScore, setScores, setWon } = setState;

  const currentScores = scores[difficulty(numBombs)];

  const DisplayScores = () => {
    return currentScores.map((c, i) => (
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
        {i < currentScores.length - 1 && (
          <Divider
            sx={{ backgroundColor: "#FFFFFF", margin: "0px 10px 0px 10px" }}
          />
        )}
      </Box>
    ));
  };

  return (
    <Box border="solid 1px #FFFFFF">
      <Typography color="#FFFFFF" align="center" variant="h3">
        SCORES
      </Typography>
      <Typography color="#FFFFFF" align="center">
        in seconds
      </Typography>
      {currentScores && <DisplayScores />}
      {enterScore && (
        <EnterScoreBox
          numBombs={numBombs}
          time={time}
          setTime={setTime}
          setScores={setScores}
          setEnterScore={setEnterScore}
          won={won}
          setWon={setWon}
        />
      )}
    </Box>
  );
};
