import { Box } from "@mui/material";
import React from "react";
import { Task } from "./task/task";

const Story = ({
  data,
  state,
  index,
  categoryIndex,
  storyIndex,
  categoryTitle,
}) => {
  return (
    <Box
      border="1px solid green"
      borderRadius={1}
      margin={1.5}
      marginBottom={5}
    >
      {data.map((task, i) => (
        <Task
          data={task}
          state={state}
          key={i}
          taskIndex={i}
          index={index}
          categoryIndex={categoryIndex}
          storyIndex={storyIndex}
          categoryTitle={categoryTitle}
        />
      ))}
    </Box>
  );
};

const ScrumBoard = ({ storyData, state, categoryTitle, categoryIndex }) => {
  return (
    <Box>
      {storyData.map((data, i) => (
        <Box key={i}>
          <Story
            data={data}
            state={state}
            categoryIndex={categoryIndex}
            storyIndex={i}
            categoryTitle={categoryTitle}
          />
        </Box>
      ))}
    </Box>
  );
};

export { ScrumBoard };
