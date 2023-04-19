import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { newBoard } from "./utils";
import { Board } from "./components/board";

const Minesweeper = () => {
  const [board, setBoard] = useState([]);
  const [searched, setSearched] = useState([]);
  const [flags, setFlags] = useState([]);
  const [numBombs, setNumBombs] = useState(20);

  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);

  const [going, setGoing] = useState(false);
  const [time, setTime] = useState();

  function newGame() {
    setBoard(newBoard(numBombs));
    setSearched([]);
    setFlags([]);
    setLost(false);
    setWon(false);
    setGoing(false);
  }

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
      <Button variant="contained" onClick={() => newGame()}>
        New Game
      </Button>
    </Box>
  );
};

export default Minesweeper;
