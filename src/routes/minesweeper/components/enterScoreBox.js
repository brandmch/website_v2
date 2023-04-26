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
    startExecuteMyMutation(
      name,
      difficulty(numBombs),
      (time / 1000).toFixed(3)
    ).then(() => getScores(setScores));
  };

  const handleNameChange = (e) => {
    if (e.length <= 8) {
      setName(e);
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        variant="filled"
        label="ENTER NAME"
        value={name}
        sx={{ backgroundColor: "#FFFFFF" }}
        onChange={(e) => handleNameChange(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </Box>
  );
};

export { EnterScoreBox };
