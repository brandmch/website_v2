import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

function isTheSame([a, b], [c, d]) {
  return a === c && b === d;
}

const Grid = ({ x, egg }) => {
  const rows = 25;
  const columns = 25;
  const tileHeight = 25;
  let tiles = [];

  for (let i = 0; i < rows; i++) {
    tiles.push([]);
    for (let k = 0; k < columns; k++) {
      tiles[i].push([i, k]);
    }
  }

  const Tile = ({ i, k, y }) => {
    return (
      <Box
        height={tileHeight}
        width={tileHeight}
        backgroundColor={
          i === y[0] && k === y[1]
            ? "black"
            : i === egg[0] && k === egg[1]
            ? "red"
            : null
        }
      ></Box>
    );
  };

  return (
    <Box
      backgroundColor="white"
      height={rows * tileHeight}
      width={columns * tileHeight}
    >
      {tiles.map((c, i) => {
        return (
          <Box key={i} display="flex">
            {c.map((d, k) => {
              return <Tile key={`${(i, k)}`} i={i} k={k} y={x} />;
            })}
          </Box>
        );
      })}
    </Box>
  );
};

const PlayArea = () => {
  const [x, xx] = useState([10, 10]);
  const [running, setRunning] = useState(false);
  const [direction, setDirection] = useState("");
  const [egg, setEgg] = useState([50, 50]);

  function newEgg() {
    let temp = [...egg];
    while (isTheSame(temp, egg)) {
      temp = [Math.floor(Math.random() * 25), Math.floor(Math.random() * 25)];
    }
    setEgg([...temp]);
  }

  if (isTheSame(egg, x)) {
    newEgg();
  }

  window.document.onkeydown = (e) => {
    if (!running) {
      setRunning(true);
      newEgg();
    }
    setDirection(e.key);
  };

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        let temp = [...x];
        switch (direction) {
          case "ArrowUp":
            temp[0] = temp[0] - 1;
            break;
          case "ArrowDown":
            temp[0] = temp[0] + 1;
            break;
          case "ArrowLeft":
            temp[1] = temp[1] - 1;
            break;
          case "ArrowRight":
            temp[1] = temp[1] + 1;
            break;
        }

        if (temp[0] > 24) {
          temp[0] = 0;
        }
        if (temp[1] > 24) {
          temp[1] = 0;
        }

        xx([...temp]);
      }, 100);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [x, running]);

  return <Grid x={x} egg={egg} />;
};

export default PlayArea;
