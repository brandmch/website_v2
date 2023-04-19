import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { newBoard } from "./utils";
import randomKeyGenerator from "../../utils/randomKeyGenerator";
import { Board } from "./components/board";

function newGame(setState, numBombs) {
  const { setSearched, setFlags, setLost, setGoing, setBoard, setWon } =
    setState;

  setBoard(newBoard(numBombs));
  setSearched([]);
  setFlags([]);
  setLost(false);
  setWon(false);
  setGoing(false);
}

const DifficultyBar = ({ setState, numBombs }) => {
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
          newGame(setState, numBombs);
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

const Minesweeper = () => {
  const [board, setBoard] = useState([]);
  const [searched, setSearched] = useState([]);
  const [flags, setFlags] = useState([]);
  const [numBombs, setNumBombs] = useState(10);

  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);

  const [going, setGoing] = useState(false);
  const [time, setTime] = useState();

  const state = {
    searched: searched,
    flags: flags,
    going: going,
    numBombs: numBombs,
  };
  const setState = {
    setSearched: setSearched,
    setFlags: setFlags,
    setLost: setLost,
    setGoing: setGoing,
    setBoard: setBoard,
    setNumBombs: setNumBombs,
    setWon: setWon,
  };

  if (searched.length + flags.length === 100 && !lost && !won && going) {
    setWon(true);
    setGoing(false);
  }

  useEffect(() => {
    if (going) {
      setTime(Date.now());
    } else {
      setTime(Date.now() - time);
    }
  }, [going]);

  useEffect(() => {
    setBoard(newBoard(numBombs));
  }, []);

  useEffect(() => {
    if (lost) {
      let x = [];
      for (let i = 0; i < board.length; i++) {
        for (let k = 0; k < board[0].length; k++) {
          x.push([i, k]);
        }
      }
      setSearched(x);
    }
  }, [lost]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor="#00033D"
      alignItems="center"
      minHeight={"100vh"}
    >
      <Typography color="#FFFFFF">Bombs: {numBombs - flags.length}</Typography>
      <Board data={board} state={state} setState={setState} />
      {lost && <Typography color="#FFFFFF">YOU LOSE</Typography>}
      {won && <Typography color="#FFF">YOU WIN! {time / 1000} sec</Typography>}
      <Button variant="contained" onClick={() => newGame(setState, numBombs)}>
        New Game
      </Button>
      <DifficultyBar setState={setState} numBombs={numBombs} />
    </Box>
  );
};

export default Minesweeper;
