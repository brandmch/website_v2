import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "./grid";

function isTheSame([a, b], [c, d]) {
  return a === c && b === d;
}

function newEgg(state, setState, bb) {
  console.log(state);
  let temp = [...state];
  let regex = new RegExp(`#${state[0]},${state[1]}#`);
  while (regex.test(bb)) {
    temp = [Math.floor(Math.random() * 25), Math.floor(Math.random() * 25)];
  }
  setState([...temp]);
}

function newGame() {}

const PlayArea = () => {
  const [x, xx] = useState([[10, 10]]);
  const [running, setRunning] = useState(false);
  const [direction, setDirection] = useState("");
  const [egg, setEgg] = useState([50, 50]);

  let snakeBodyLocationsStr = `#${x.join("#")}#`;

  window.document.onkeydown = (e) => {
    if (!running) {
      setRunning(true);
      newEgg(egg, setEgg, snakeBodyLocationsStr);
    }
    setDirection(e.key);
  };

  if (isTheSame(egg, x[0])) {
    newEgg(egg, setEgg, snakeBodyLocationsStr);
  }

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        let temp = [...x];
        let head = [...temp[0]];
        switch (direction) {
          case "ArrowUp":
            head[0] = head[0] - 1;
            break;
          case "ArrowDown":
            head[0] = head[0] + 1;
            break;
          case "ArrowLeft":
            head[1] = head[1] - 1;
            break;
          case "ArrowRight":
            head[1] = head[1] + 1;
            break;
        }

        // Delete this
        if (head[0] > 24) {
          head[0] = 0;
        }
        if (head[1] > 24) {
          head[1] = 0;
        }
        //

        if (isTheSame(egg, head)) {
          temp.unshift([...head]);
        } else {
          temp.unshift([...head]);
          temp.pop();
        }

        xx([...temp]);
      }, 100);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [x, running]);

  return <Grid x={snakeBodyLocationsStr} egg={egg} />;
};

export default PlayArea;
