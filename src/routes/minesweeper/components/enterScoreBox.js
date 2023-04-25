import { useState } from "react";
import { startExecuteMyMutation } from "../hasura/mutation";
import { startFetchMyQuery } from "../hasura/query";
import { Box, Button, TextField } from "@mui/material";
import { difficulty } from "../utils";

const EnterScoreBox = ({
  numBombs,
  time,
  setScores,
  setEnterScore,
  setTime,
}) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    setEnterScore(false);
    setTime();
    startExecuteMyMutation(name, difficulty(numBombs), time / 1000).then(() =>
      startFetchMyQuery()
        .then((x) =>
          x.MinesweeperScores.reduce(
            (a, c) => {
              let tempObj = { ...a };
              tempObj[c.difficulty].push(c);
              return tempObj;
            },
            { PRACTICE: [], EASY: [], MEDIUM: [], HARD: [], IMPOSSIBLE: [] }
          )
        )
        .then((x) => {
          let t = { ...x };
          for (let i in t) {
            t[i] = t[i]
              .sort((a, b) => a.score - b.score)
              .filter((c, i) => i < 10);
          }
          return t;
        })
        .then((x) => setScores(x))
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
