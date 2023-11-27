import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { ScrumBoard } from "./columns/scrumBoard";
const data = require("./testData.json");
const fakeData = [
  {
    tasks: ["Fix a bug"],
    todos: ["Do this", "Do that"],
    doings: ["doing this", "doing that", "doing itall"],
    dones: ["this one is done"],
  },
  {
    tasks: ["Add a nice new Feature!"],
    todos: ["Do this", "Do that", "Much to do!"],
    doings: ["doing this"],
    dones: ["this one is done", "Another one is done! Long live the king!"],
  },
  {
    tasks: ["Yet to be tasked out"],
    todos: [],
    doings: [],
    dones: [],
  },
];

const categories = ["tasks", "todos", "doings", "dones"];
function padData(storyData) {
  const maxLength = Math.max(
    ...categories.map((category) => storyData[category].length)
  );
  categories.forEach((category) => {
    const lengthDiff = maxLength - storyData[category].length;
    storyData[category] = [
      ...storyData[category],
      ...Array(lengthDiff).fill(""),
    ];
  });
  return storyData;
}

const SimpleScrumMain = () => {
  const newData = fakeData.map((curr) => {
    return padData(curr);
  });
  const categorizedData = newData.reduce(
    (acc, curr) => {
      let tempObj = { ...acc };
      tempObj.tasks = [...tempObj.tasks, curr.tasks];
      tempObj.todos = [...tempObj.todos, curr.todos];
      tempObj.doings = [...tempObj.doings, curr.doings];
      tempObj.dones = [...tempObj.dones, curr.dones];
      return tempObj;
    },
    { tasks: [], todos: [], doings: [], dones: [] }
  );

  return (
    <Box>
      <Typography>Triple D Scrum</Typography>
      <Box display="flex">
        {categories.map((cat, i) => (
          <Box width={250} textAlign="center" padding={2} key={i}>
            <Typography>{cat}</Typography>
            <Box border="1px solid black" borderRadius={1}>
              <ScrumBoard storyData={categorizedData[cat]} key={i} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SimpleScrumMain;
