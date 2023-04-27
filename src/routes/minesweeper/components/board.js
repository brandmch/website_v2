import { Box, Button, Typography } from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";
import { lookAround, checkIfArrInArr, newBoard } from "../utils";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FlagIcon from "@mui/icons-material/Flag";
import { newGame } from "../utils";

function uncover([i, k], board, flags, searched, toBeUncovered = []) {
  if (checkIfArrInArr(searched, [i, k]) === -1) {
    toBeUncovered.push([i, k]);
  }

  if (board[i][k] === 0) {
    let around = lookAround([i, k]);
    around.forEach(([a, b]) => {
      if (
        checkIfArrInArr(toBeUncovered, [a, b]) === -1 &&
        checkIfArrInArr(flags, [a, b]) === -1 &&
        checkIfArrInArr(searched, [a, b]) === -1
      ) {
        uncover([a, b], board, flags, searched, toBeUncovered);
      }
    });
  }

  return toBeUncovered;
}

const Tile = ({ x, coord, state, setState }) => {
  const { searched, flags, going, numBombs, won, lost } = state;
  const { setSearched, setFlags, setLost, setGoing, setBoard } = setState;
  let board = state.board;
  let desktop = state.width > 530 ? true : false;

  let vis = checkIfArrInArr(searched, coord) === -1 ? false : true;
  let flagged = checkIfArrInArr(flags, coord) === -1 ? false : true;

  function go() {
    if (!going) {
      if (x !== 0) {
        let y, b;
        while (y !== 0) {
          b = newBoard(numBombs);
          y = b[coord[0]][coord[1]];
        }
        board = b;
        setBoard(b);
      }
      setGoing(true);
    }
  }

  const handleLeftClick = () => {
    go(board);
    if (!flagged) {
      let [x, y] = coord;
      if (board[x][y] === "X") {
        setLost(true);
        setGoing(false);
      } else {
        let tempArr = [...searched];
        tempArr.push(...uncover(coord, board, flags, searched));
        setSearched(tempArr);
      }
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (!vis) {
      if (!flagged) {
        let tempArr = [...flags];
        tempArr.push(coord);
        setFlags(tempArr);
      } else {
        let tempArr = [...flags];
        let ind = tempArr.findIndex(
          (c) => JSON.stringify(c) === JSON.stringify(coord)
        );
        tempArr.splice(ind, 1);
        setFlags(tempArr);
      }
    }
    return false;
  };

  function checkColor(x) {
    return x === 1
      ? "#0054FF"
      : x === 2
      ? "#9000FF"
      : x === 3
      ? "#FF0000"
      : x === 4
      ? "#FF9000"
      : x === 5
      ? "#C0B900"
      : x === 6
      ? "#4EFF00"
      : x === 7
      ? "#00FFEA"
      : x === 8
      ? "#906E3E"
      : "#000000";
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={desktop ? 40 : 28}
      width={desktop ? 40 : 28}
      backgroundColor={vis ? "#FFFFFF" : "#BCE6E6"}
      border={desktop ? "solid 4px" : "solid 2.8px"}
      borderColor={
        vis ? "#005959 white white #005959" : "white #005959 #005959 white"
      }
      sx={{
        "&:active": {
          borderColor: "#005959 white white #005959",
          backgroundColor: "white",
        },
      }}
      onClick={!won && !lost ? handleLeftClick : null}
      onContextMenu={!won && !lost ? handleRightClick : null}
      key={randomKeyGenerator()}
    >
      {vis ? (
        <Typography
          fontSize={desktop ? 25 : 15}
          fontFamily="kanit"
          fontWeight={800}
          color={checkColor(x)}
        >
          {x === 0 ? "" : x === "X" ? <LocalFireDepartmentIcon /> : x}
        </Typography>
      ) : flagged ? (
        <Typography color="#000000">
          <FlagIcon />
        </Typography>
      ) : null}
    </Box>
  );
};

const Board = ({ state, setState }) => {
  return (
    <Box>
      {state.board.map((row, i) => (
        <Box display="flex" key={randomKeyGenerator()}>
          {row.map((box, k) => (
            <Tile
              x={box}
              coord={[i, k]}
              key={randomKeyGenerator()}
              state={state}
              setState={setState}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

const BombCounter = ({ numBombs, flags }) => {
  return (
    <Box marginBottom={2}>
      <Typography fontSize={20} color="#FFFFFF">
        Bombs: {numBombs - flags.length}
      </Typography>
    </Box>
  );
};

const NewGameButton = ({ numBombs, setState }) => {
  return (
    <Box
      marginTop={3}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={40}
      width={192}
      backgroundColor="#BCE6E6"
      border="solid 4px"
      borderColor="white #005959 #005959 white"
      sx={{
        "&:active": {
          borderColor: "#005959 white white #005959",
        },
      }}
      onClick={() => newGame(setState, numBombs)}
    >
      <Typography>NEW GAME</Typography>
    </Box>
  );
};

//
//

export const Game = ({ state, setState }) => {
  const { numBombs, flags, lost, won, time } = state;
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <BombCounter numBombs={numBombs} flags={flags} />
      <Board state={state} setState={setState} />
      {lost && <Typography color="#FFFFFF">YOU LOSE</Typography>}
      {won && <Typography color="#FFF">YOU WIN! {time / 1000} sec</Typography>}
      <NewGameButton numBombs={state.numBombs} setState={setState} />
    </Box>
  );
};
