import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {
  Column_Doing,
  Column_Tasks,
  Column_Todo,
  Column_Done,
} from "./columns/_columns";
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
];

function padData(storyData) {
  let { tasks, todos, doings, dones } = storyData;
  const maxLength = Math.max(
    tasks.length,
    todos.length,
    doings.length,
    dones.length
  );
  if (tasks.length < maxLength) {
    const lengthDiff = maxLength - tasks.length;
    tasks = [...tasks, ...Array(lengthDiff).fill("")];
  }
  if (todos.length < maxLength) {
    const lengthDiff = maxLength - todos.length;
    todos = [...todos, ...Array(lengthDiff).fill("")];
  }
  if (doings.length < maxLength) {
    const lengthDiff = maxLength - doings.length;
    doings = [...doings, ...Array(lengthDiff).fill("")];
  }
  if (dones.length < maxLength) {
    const lengthDiff = maxLength - dones.length;
    dones = [...dones, ...Array(lengthDiff).fill("")];
  }
  return { tasks, todos, doings, dones };
}

const Story = ({ storyData }) => {
  // Pad arrays with empty strings
  let { tasks, todos, doings, dones } = padData(storyData);

  return (
    <Box display="flex" width="100vw">
      <Column_Tasks data={tasks} />
      <Column_Todo data={todos} />
      <Column_Doing data={doings} />
      <Column_Done data={dones} />
    </Box>
  );
};

const SimpleScrumMain = () => {
  return (
    <Box height="100vh" width="100vw">
      <Typography>Triple D Scrum</Typography>
      {fakeData.map((data, i) => (
        <Story storyData={data} key={i} />
      ))}
    </Box>
  );
};

export default SimpleScrumMain;
