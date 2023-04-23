import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { newBoard, newGame } from "./utils";
import { Board } from "./components/board";
import { DifficultyBar } from "./components/difficultyBar";
import { Scores } from "./components/scores";

const Minesweeper = () => {
  const [board, setBoard] = useState([]);
  const [searched, setSearched] = useState([]);
  const [flags, setFlags] = useState([]);
  const [numBombs, setNumBombs] = useState(10);

  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);

  const [going, setGoing] = useState(false);
  const [time, setTime] = useState();

  // Hold state in objects to simplify passing between components
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

  // On render, check if the game is won
  if (searched.length + flags.length === 100 && !lost && !won && going) {
    setWon(true);
    setGoing(false);
  }

  // When a game starts, store the current time
  // When a game stops, subtract the stored time with the current time
  useEffect(() => {
    if (going) {
      setTime(Date.now());
    } else {
      setTime(Date.now() - time);
    }
  }, [going]);

  // On load, create a board
  useEffect(() => {
    setBoard(newBoard(numBombs));
  }, []);

  // If the game is lost, display all remaining tiles
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

  // When the difficulty changes, newGame
  useEffect(() => {
    newGame(setState, numBombs);
  }, [numBombs]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor="#00033D"
      alignItems="center"
      minHeight={"100vh"}
    >
      <Box display="flex">
        <Scores time={time} />
        <Box>
          <Typography color="#FFFFFF">
            Bombs: {numBombs - flags.length}
          </Typography>
          <Board data={board} state={state} setState={setState} />
          {lost && <Typography color="#FFFFFF">YOU LOSE</Typography>}
          {won && (
            <Typography color="#FFF">YOU WIN! {time / 1000} sec</Typography>
          )}
          <Button
            variant="contained"
            onClick={() => newGame(setState, numBombs)}
          >
            New Game
          </Button>
          <DifficultyBar setState={setState} numBombs={numBombs} />
        </Box>
      </Box>
    </Box>
  );
};

export default Minesweeper;
