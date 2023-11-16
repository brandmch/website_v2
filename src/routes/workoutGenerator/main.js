import { Box, Typography, Switch, Button } from "@mui/material";
import CustomizedMenus from "./dropDownMenu";
import { useState } from "react";
const woData = require("./woData.json");
// woData.length = 1327

// Generate a random workout
let randomWO = Math.floor(Math.random() * woData.length);

// Gets options for dropdown Menus
const targets = woData.reduce(
  (a, c) => (a.includes(c.target) ? a : [...a, c.target]),
  []
);
const bodyParts = woData.reduce(
  (a, c) => (a.includes(c.bodyPart) ? a : [...a, c.bodyPart]),
  []
);

// display it on the page
const RandomWODisplay = () => {
  const woToDisplay = woData[randomWO];
  return (
    <Box>
      <Typography color="white">{woToDisplay.name}</Typography>
      <Typography color="white">{woToDisplay.target}</Typography>
      <Typography color="white">{woToDisplay.bodyPart}</Typography>
      <Typography color="white">{woToDisplay.equipment}</Typography>
      <Typography color="white">{woToDisplay.id}</Typography>
      {/* <img src={woToDisplay.gifUrl} alt="A GIF" /> */}
    </Box>
  );
};

const TargetOrBodyPart_Switch = ({ state, setState }) => {
  return (
    <Box display="flex" alignItems="center">
      <Switch checked={state} onChange={() => setState(!state)} />
      <Typography color="white">{state ? "Target" : "Body Part"}</Typography>
    </Box>
  );
};

export const WorkoutGeneratorLanding = () => {
  const [targetOrBodyPart, setTargetOrBodyPart] = useState(true); // true=Target false=BodyPart
  const [numWO, setNumWO] = useState(["Target"]);
  console.log(numWO);

  return (
    <Box
      minHeight="100vh"
      backgroundColor="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {numWO.map((c, i) => {
        return (
          <CustomizedMenus
            options={targetOrBodyPart ? targets : bodyParts}
            index={i}
            setState={setNumWO}
            state={numWO}
            key={i}
          />
        );
      })}
      <Button onClick={() => setNumWO([...numWO, "Target"])}>
        Add Workout
      </Button>
      <Button
        onClick={() => (window.location.href = `/wg/${numWO.join(",")}/`)}
      >
        GO!
      </Button>
    </Box>
  );
};
// 4. Ability for user to pick body parts to work
