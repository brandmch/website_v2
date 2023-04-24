import { useState } from "react";
import { startExecuteMyMutation } from "../hasura/mutation";
import { startFetchMyQuery } from "../hasura/query";
import { Box, Button, TextField } from "@mui/material";

const EnterScoreBox = ({ numBombs, time, setScores, setEnterScore }) => {
  const [name, setName] = useState("");

  let difficulty = () => {
    switch (numBombs) {
      case 5:
        return "PRACTICE";
      case 20:
        return "EASY";
      case 35:
        return "MEDIUM";
      case 50:
        return "HARD";
      case 65:
        return "IMPOSSIBLE";
    }
  };

  const handleSubmit = () => {
    startExecuteMyMutation(name, difficulty(), time / 1000);
    startFetchMyQuery().then((x) => setScores(x.MinesweeperScores));
    setEnterScore(false);
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
