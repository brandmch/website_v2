import { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import React from "react";
import { DraggableBox } from "./draggableBox";

function removeWhiteSpace(state, index) {
  let tempState = [...state];
  const categories = ["tasks", "todos", "doings", "dones"];
  categories.forEach((category) => {
    tempState[index][category] = tempState[index][category].reduce(
      (acc, curr) => (curr === "" ? acc : [...acc, curr]),
      []
    );
  });
  return tempState;
}

const Task = ({
  data,
  state,
  categoryIndex,
  storyIndex,
  categoryTitle,
  taskIndex,
}) => {
  const [input, setInput] = useState("");
  const [moveTo, setBoxes] = useState({
    categoryTitle,
    categoryIndex,
    storyIndex,
    taskIndex,
  });

  const handleDrop = (dragged) => {
    let newData = [...state.data];
    const removedTask = newData[dragged.storyIndex][
      dragged.categoryTitle
    ].splice(
      newData[dragged.storyIndex][dragged.categoryTitle].indexOf(
        newData[dragged.storyIndex][dragged.categoryTitle][dragged.taskIndex]
      ),
      1
    );

    newData[moveTo.storyIndex][moveTo.categoryTitle].unshift(removedTask[0]);
    console.log(newData);
    newData = removeWhiteSpace(newData, moveTo.storyIndex);
    newData = removeWhiteSpace(newData, dragged.storyIndex);

    state.setData(newData);
  };

  const handleClick_newTodo = () => {
    let tempState = [...state.data];
    tempState[storyIndex].todos = [input, ...tempState[storyIndex].todos];
    tempState = removeWhiteSpace(tempState, storyIndex);
    state.setData(tempState);
    setInput("");
  };

  return data === "" ? (
    <DraggableBox key={moveTo} id={moveTo} onDrop={handleDrop}>
      <Box height={152} marginBottom={1.5} padding={1} margin={1.5} />
    </DraggableBox>
  ) : (
    <DraggableBox key={moveTo} id={moveTo} onDrop={handleDrop}>
      <Box
        height={150}
        border="1px solid red"
        borderRadius={1}
        textAlign="left"
        padding={1}
        marginBottom={1.5}
        margin={1.5}
      >
        <Typography>{data}</Typography>
        {categoryIndex === 0 && (
          <Box>
            <TextField
              label="Add task"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="contained" onClick={handleClick_newTodo}></Button>
          </Box>
        )}
      </Box>
    </DraggableBox>
  );
};

export { Task };
