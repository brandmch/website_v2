import { useState, useEffect } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { newBoard, newGame } from "./utils";
import { Board } from "./components/board";
import { DifficultyBar } from "./components/difficultyBar";
import { Scores } from "./components/scores";
import { startFetchMyQuery } from "./hasura/query";
import { EnterScoreBox } from "./components/enterScoreBox";

const Minesweeper = () => {
  const [board, setBoard] = useState([]);
  const [searched, setSearched] = useState([]);
  const [flags, setFlags] = useState([]);
  const [numBombs, setNumBombs] = useState(5);

  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);

  const [going, setGoing] = useState(false);
  const [time, setTime] = useState();

  const [scores, setScores] = useState();
  const [enterScore, setEnterScore] = useState(false);

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
    setEnterScore: setEnterScore,
    setTime: setTime,
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

  //
  //

  useEffect(() => {
    startFetchMyQuery().then((x) => setScores(x.MinesweeperScores));
  }, []);

  let timeToBeat = () => {
    if (scores) {
      let tempArr = scores
        .sort((a, b) => a.score - b.score)
        .filter((a) => a.score);
      return tempArr[tempArr.length - 1].score;
    }
  };

  if (time && time / 1000 < timeToBeat() && !enterScore) {
    setEnterScore(true);
  }

  //
  //

  return (
    <Box backgroundColor="#00033D" alignItems="center" minHeight={"100vh"}>
      <Box display="flex" flex={1} padding={5}>
        <Box flex={1}>
          {scores && <Scores scores={scores} numBombs={numBombs} />}
          {enterScore && (
            <EnterScoreBox
              numBombs={numBombs}
              time={time}
              setScores={setScores}
              setEnterScore={setEnterScore}
            />
          )}
        </Box>
        <Box flex={5} display="flex" flexDirection="column" alignItems="center">
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
        </Box>
        <Box flex={1}>
          <DifficultyBar setState={setState} numBombs={numBombs} />
        </Box>
      </Box>
    </Box>
  );
};

export default Minesweeper;
