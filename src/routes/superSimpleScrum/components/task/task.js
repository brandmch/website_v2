import { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import React from "react";
import { DraggableBox } from "./draggableBox";
import { createTask } from "../../hasura/createTask";

// removes the white spaces from 1 category in 1 story
// allows for the proper white-spacing upon refresh
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
  // kind of confusing:
  // moveTo and dragged are part of the <DraggableBox> object
  // moveTo is the coordinates of the new location of the dragged box
  // dragged is the coordinates of the og location of the dragged box
  const [moveTo, setBoxes] = useState({
    categoryTitle,
    categoryIndex,
    storyIndex,
    taskIndex,
  });

  // when a task is dropped,
  // this function takes the coordinates of dragged and moveTo
  // and updates state accordingly
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
    newData = removeWhiteSpace(newData, moveTo.storyIndex);
    newData = removeWhiteSpace(newData, dragged.storyIndex);

    state.setData(newData);
    state.setNewData(true);
  };

  // takes the input and creates a new todo
  const handleClick_newTodo = () => {
    let tempState = [...state.data];
    tempState[storyIndex].todos = [
      { id: null, text: input },
      ...tempState[storyIndex].todos,
    ];
    tempState = removeWhiteSpace(tempState, storyIndex);
    state.setData(tempState);
    state.setNewData(true);
    setInput("");
  };

  return !data ? (
    <DraggableBox key={moveTo} id={moveTo} onDrop={handleDrop}>
      <Box height={152} marginBottom={1.5} padding={1} margin={1.5} />
    </DraggableBox>
  ) : categoryIndex === 0 ? (
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
      </Box>
    </DraggableBox>
  );
};

export { Task };
