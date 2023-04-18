import { Box, Typography } from "@mui/material";
import randomKeyGenerator from "../../../utils/randomKeyGenerator";
import { lookAround, checkIfArrInArr } from "../utils";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FlagIcon from "@mui/icons-material/Flag";

function uncover([i, k], board, flags, searched, toBeUncovered = []) {
  toBeUncovered.push([i, k]);

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

const Tile = ({
  x,
  coord,
  board,
  searched,
  setSearched,
  flags,
  setFlags,
  setLost,
  going,
  setGoing,
}) => {
  let vis = checkIfArrInArr(searched, coord) === -1 ? false : true;
  let flagged = checkIfArrInArr(flags, coord) === -1 ? false : true;

  function go() {
    if (!going) {
      setGoing(true);
    }
  }

  const handleLeftClick = () => {
    go();
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
    go();
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

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={50}
      width={50}
      backgroundColor={vis ? "#E0FFE9" : "#8AFFAC"}
      border="solid 0.5px #007723"
      sx={{ "&:active": { backgroundColor: "#00FF4A" } }}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      key={randomKeyGenerator()}
    >
      {vis ? (
        <Typography color="#000000">
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

export const Board = ({
  data,
  searched,
  setSearched,
  flags,
  setFlags,
  setLost,
  going,
  setGoing,
}) => {
  const board = data;

  return (
    <Box>
      {board.map((row, i) => (
        <Box display="flex" key={randomKeyGenerator()}>
          {row.map((box, k) => (
            <Tile
              x={box}
              coord={[i, k]}
              board={data}
              searched={searched}
              setSearched={setSearched}
              flags={flags}
              setFlags={setFlags}
              key={randomKeyGenerator()}
              setLost={setLost}
              going={going}
              setGoing={setGoing}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};
