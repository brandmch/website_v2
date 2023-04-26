import { Box, Typography, Divider, Skeleton } from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";
import { EnterScoreBox } from "./enterScoreBox";
import { difficulty } from "../utils";

export const Scores = ({ state, setState }) => {
  if (state.scores) {
    const { scores, numBombs, enterScore } = state;

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
            <Typography color="#FFFFFF" flex={1}>
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
      <Box width={210}>
        <Box border="solid 1px #FFFFFF" padding={1}>
          <Typography color="#FFFFFF" align="center" variant="h3">
            SCORES
          </Typography>
          <Typography color="#FFFFFF" align="center" marginBottom={2}>
            in seconds
          </Typography>
          {currentScores && <DisplayScores />}
        </Box>
        <Box marginTop={2}>
          {enterScore && <EnterScoreBox state={state} setState={setState} />}
        </Box>
      </Box>
    );
  } else {
    return (
      <Skeleton
        variant="rectangular"
        width={210}
        height={210}
        sx={{ backgroundColor: "#656A9B" }}
      />
    );
  }
};
