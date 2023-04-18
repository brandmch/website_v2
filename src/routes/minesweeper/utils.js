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
