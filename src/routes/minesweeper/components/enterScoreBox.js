import { useState } from "react";
import { startExecuteMyMutation } from "../hasura/mutation";
import { getScores } from "../hasura/query";
import { Box, Button, TextField } from "@mui/material";
import { difficulty } from "../utils";

const EnterScoreBox = ({ state, setState }) => {
  const [name, setName] = useState("");

  const { numBombs, time } = state;
  const { setScores, setEnterScore, setWon } = setState;

  const handleSubmit = () => {
    setEnterScore(false);
    setWon(false);
    startExecuteMyMutation(name, difficulty(numBombs), time / 1000).then(() =>
      getScores(setScores)
    );
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        variant="filled"
        label="ENTER NAME"
        sx={{ backgroundColor: "#FFFFFF" }}
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </Box>
  );
};

export { EnterScoreBox };
