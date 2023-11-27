import { useState, useEffect } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const Task = ({ data, state, index }) => {
  const [input, setInput] = useState("");

  const handleClick_newTodo = () => {
    let tempState = [...state.data];

    tempState[index].todos = [input, ...tempState[index].todos];
    const categories = ["tasks", "todos", "doings", "dones"];

    categories.forEach((category) => {
      tempState[index][category] = tempState[index][category].reduce(
        (acc, curr) => (curr === "" ? acc : [...acc, curr]),
        []
      );
    });

    // remove "" from arrays
    console.log(tempState);

    state.setData(tempState);
    setInput("");
  };

  return data === "" ? (
    <Box height={152} marginBottom={1.5} padding={1} margin={1.5} />
  ) : (
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
      {state && (
        <Box>
          <TextField
            label="Add task"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" onClick={handleClick_newTodo}></Button>
        </Box>
      )}
    </Box>
  );
};

const Story = ({ data, state, index }) => {
  return (
    <Box
      border="1px solid green"
      borderRadius={1}
      margin={1.5}
      marginBottom={5}
    >
      {data.map((task, i) => (
        <Task data={task} state={state} key={i} index={index} />
      ))}
    </Box>
  );
};

const ScrumBoard = ({ storyData, state, category }) => {
  return (
    <Box>
      {storyData.map((data, i) => (
        <Box key={i}>
          <Story
            data={data}
            state={category === "tasks" ? state : null}
            index={i}
          />
        </Box>
      ))}
    </Box>
  );
};

export { ScrumBoard };
