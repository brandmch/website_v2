import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

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
    let regex = new RegExp(`#${i},${k}#`);
    return (
      <Box
        height={tileHeight}
        width={tileHeight}
        backgroundColor={
          regex.test(y) ? "black" : i === egg[0] && k === egg[1] ? "red" : null
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

export default Grid;
