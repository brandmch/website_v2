import { useState } from "react";
import { startExecuteMyMutation } from "../hasura/mutation";
import { getScores } from "../hasura/query";
import { Box, Button, TextField } from "@mui/material";
import { difficulty } from "../utils";

const EnterScoreBox = ({ state, setState }) => {
  const [name, setName] = useState("");

  const { numBombs, time } = state;
  const { setScores, setEnterScore, setWon } = setState;

  let score = (time / 1000).toFixed(3);
  if (score > 9999.999) {
    score = 9999.999;
  }

  const handleSubmit = () => {
    setEnterScore(false);
    setWon(false);
    startExecuteMyMutation(name, difficulty(numBombs), score).then(() =>
      getScores(setScores)
    );
  };

  function handleNameChange(e) {
    if (e.length <= 8) {
      setName(e);
    }
  }

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        id="enterName"
        label="ENTER NAME"
        variant="filled"
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}
        sx={{ backgroundColor: "#FFFFFF" }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </Box>
  );
};

export { EnterScoreBox };
