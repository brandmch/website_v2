import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { newBoard, newGame, difficulty } from "./utils";
import { Game } from "./components/board";
import { DifficultyBar } from "./components/difficultyBar";
import { Scores } from "./components/scores";
import { getScores } from "./hasura/query";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

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
    board: board,
    searched: searched,
    flags: flags,
    going: going,
    numBombs: numBombs,
    scores: scores,
    time: time,
    enterScore: enterScore,
    won: won,
    lost: lost,
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
    setScores: setScores,
  };

  // Theme
  const theme = useTheme();
  const minesweeperTheme = createTheme({
    ...theme,
    typography: {
      fontFamily: ["Roboto Mono"],
      fontWeightRegular: 600,
    },
  });

  // On render, check if the game is won
  if (
    flags.length === numBombs &&
    searched.length + flags.length === 100 &&
    !lost &&
    !won &&
    going
  ) {
    setWon(true);
    setGoing(false);
  }

  // When a game starts, store the current time
  // When a game stops, subtract the stored time with the current time
  useEffect(() => {
    going ? setTime(Date.now()) : setTime(Date.now() - time);
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

  // Get scores
  useEffect(() => {
    getScores(setScores);
  }, []);

  // Get the time of the #10 spot & determine if current user's time beats it
  let timeToBeat = () => {
    let d = difficulty(numBombs);
    if (scores[d] && scores[d].length >= 10) {
      return scores[d][scores[d].length - 1].score;
    } else {
      return 99999999999999999999999999;
    }
  };

  if (time && time / 1000 < timeToBeat() && !enterScore && !lost && won) {
    setEnterScore(true);
  }

  //
  //

  return (
    <ThemeProvider theme={minesweeperTheme}>
      <Box backgroundColor="#30377B" alignItems="center" minHeight={"100vh"}>
        <Box display="flex" flex={1} padding={3} justifyContent="center">
          <Box marginTop={5} marginRight={3}>
            {scores && <Scores state={state} setState={setState} />}
          </Box>
          <Box>
            <Game state={state} setState={setState} />
          </Box>
          <Box marginTop={5} marginLeft={3}>
            <DifficultyBar setState={setState} numBombs={numBombs} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Minesweeper;
