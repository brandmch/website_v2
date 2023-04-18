import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import randomKeyGenerator from "../../utils/randomKeyGenerator";
import shuffle from "../../utils/shuffleArray";
import { lookAround, detectBombs, checkIfArrInArr } from "./utils";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FlagIcon from "@mui/icons-material/Flag";
import { Board } from "./components/board";

const newBoard = (numBombs) => {
  let board = [];
  let bombs = numBombs;
  for (let i = 0; i < 100; i++) {
    board.push(bombs > 0 ? "X" : "O");
    bombs--;
  }

  shuffle(board);

  // Group board array into rows
  let tempboard = [];
  for (let i = 0; i < 10; i++) {
    tempboard.push([]);
    for (let k = 0; k < 10; k++) {
      tempboard[i].push(board[i * 10 + k]);
    }
  }
  return detectBombs(tempboard);
};

const Minesweeper = () => {
  const [board, setBoard] = useState([]);
  const [searched, setSearched] = useState([]);
  const [flags, setFlags] = useState([]);
  const [numBombs, setNumBombs] = useState(5);
  const [lost, setLost] = useState(false);

  const [going, setGoing] = useState(false);
  const [time, setTime] = useState();

  console.log(going, time);

  let won = searched.length + flags.length === 100 && !lost;
  if (won) {
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
      <Board
        data={board}
        searched={searched}
        setSearched={setSearched}
        flags={flags}
        setFlags={setFlags}
        setLost={setLost}
        going={going}
        setGoing={setGoing}
      />
      {lost && <Typography color="#FFFFFF">YOU LOSE</Typography>}
      {won && <Typography color="#FFF">YOU WIN!</Typography>}
      <Button
        variant="contained"
        onClick={() => {
          setBoard(newBoard(numBombs));
          setSearched([]);
          setFlags([]);
          setLost(false);
        }}
      >
        New Game
      </Button>
    </Box>
  );
};

export default Minesweeper;
