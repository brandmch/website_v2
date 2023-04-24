import shuffle from "../../utils/shuffleArray";

export function lookAround([i, k]) {
  let around = [];
  if (i > 0 && i < 9 && k > 0 && k < 9) {
    around = [
      [i - 1, k - 1],
      [i - 1, k],
      [i - 1, k + 1],
      [i, k - 1],
      [i, k + 1],
      [i + 1, k - 1],
      [i + 1, k],
      [i + 1, k + 1],
    ];
  } else if (i === 0 && k === 0) {
    around = [
      [i, k + 1],
      [i + 1, k],
      [i + 1, k + 1],
    ];
  } else if (i === 0 && k < 9) {
    around = [
      [i, k - 1],
      [i, k + 1],
      [i + 1, k - 1],
      [i + 1, k],
      [i + 1, k + 1],
    ];
  } else if (i === 0 && k === 9) {
    around = [
      [i, k - 1],
      [i + 1, k - 1],
      [i + 1, k],
    ];
  } else if (i === 9 && k === 0) {
    around = [
      [i - 1, k],
      [i - 1, k + 1],
      [i, k + 1],
    ];
  } else if (i === 9 && k < 9) {
    around = [
      [i - 1, k - 1],
      [i - 1, k],
      [i - 1, k + 1],
      [i, k - 1],
      [i, k + 1],
    ];
  } else if (i === 9 && k === 9) {
    around = [
      [i - 1, k - 1],
      [i - 1, k],
      [i, k - 1],
    ];
  } else if (k === 0 && i === 0) {
    around = [
      [i, k + 1],
      [i + 1, k],
      [i + 1, k + 1],
    ];
  } else if (k === 0 && i < 9) {
    around = [
      [i - 1, k],
      [i - 1, k + 1],
      [i, k + 1],
      [i + 1, k],
      [i + 1, k + 1],
    ];
  } else if (k === 0 && i === 9) {
    around = [
      [i - 1, k],
      [i - 1, k + 1],
      [i, k + 1],
    ];
  } else if (k === 9 && i === 0) {
    around = [
      [i, k - 1],
      [i + 1, k - 1],
      [i + 1, k],
    ];
  } else if (k === 9 && i < 9) {
    around = [
      [i - 1, k - 1],
      [i - 1, k],
      [i, k - 1],
      [i + 1, k - 1],
      [i + 1, k],
    ];
  } else if (k === 9 && i === 9) {
    around = [
      [i - 1, k - 1],
      [i - 1, k],
      [i, k - 1],
    ];
  }

  return around;
}

export function newGame(setState, numBombs) {
  const {
    setSearched,
    setFlags,
    setLost,
    setGoing,
    setBoard,
    setWon,
    setEnterScore,
    setTime,
  } = setState;

  setBoard(newBoard(numBombs));
  setSearched([]);
  setFlags([]);
  setLost(false);
  setWon(false);
  setGoing(false);
  setEnterScore(false);
  setTime();
}

export const detectBombs = (board) => {
  return board.map((row, i) => {
    return row.map((tile, k) => {
      if (board[i][k] !== "X") {
        let numBombs = 0;
        lookAround([i, k]).forEach((x) => {
          if (board[x[0]][x[1]] === "X") {
            numBombs++;
          }
        });
        return numBombs;
      } else {
        return "X";
      }
    });
  });
};

export function checkIfArrInArr(a, b) {
  const x = JSON.stringify(a);
  const y = JSON.stringify(b);
  return x.indexOf(y);
}

export const newBoard = (numBombs) => {
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
