import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import capitalize from "../../utils/capitalize";
import { useState } from "react";
import { useEffect } from "react";
import WorkoutRoutine from "./workout_class";

export const WorkoutScreen = () => {
  const { created } = useParams();
  const [workouts, setWorkouts] = useState();
  const [newWorkouts, setNewWorkouts] = useState(true);

  useEffect(() => {
    setWorkouts(new WorkoutRoutine(created.split(",")));
  }, [newWorkouts]);

  return (
    <Box display="flex" alignItems="center" flexDirection="column" padding={5}>
      <Box display="flex" justifyContent="center" flexDirection="column">
        {workouts.getCurrentWOrkouts.length > 0
          ? workouts.map((c, i) => {
              const name = capitalize(c.name);
              const bodyPart = capitalize(c.bodyPart);
              const secondaryMuscles = capitalize(c.secondaryMuscles);
              return (
                <Box key={i} margin={1}>
                  <Typography fontSize={20}>{name}</Typography>
                  <Typography>{bodyPart}</Typography>
                  <Typography>{secondaryMuscles.join(", ")}</Typography>
                </Box>
              );
            })
          : null}
      </Box>
      <Button varient="outlined" onClick={() => setNewWorkouts(!newWorkouts)}>
        New Workouts
      </Button>
    </Box>
  );
};
