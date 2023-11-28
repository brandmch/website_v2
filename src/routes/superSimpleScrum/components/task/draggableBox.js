import { Box } from "@mui/material";
import React from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggableBox = ({ id, children, onDrop }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BOX",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "BOX",
    drop: (droppedItem) => {
      onDrop(droppedItem.id, id); // Pass the IDs to the onDrop callback
    },
  }));

  return (
    <Box
      ref={(node) => drag(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      {children}
    </Box>
  );
};

export { DraggableBox };
