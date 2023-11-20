import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import capitalize from "../../../utils/capitalize";
import { useState } from "react";
import { useEffect } from "react";
import WorkoutRoutine from "../components/workout_class";

export const WorkoutScreen = () => {
  const { created } = useParams();
  const [routine, setRoutine] = useState();
  const [newWorkouts, setNewWorkouts] = useState(false);

  useEffect(() => {
    setRoutine(new WorkoutRoutine(created.split(",")));
  }, []);

  useEffect(() => {
    if (newWorkouts) {
      routine.newRoutine();
      setNewWorkouts(false);
    }
  }, [newWorkouts]);

  return (
    <Box display="flex" alignItems="center" flexDirection="column" padding={5}>
      <Box display="flex" justifyContent="center" flexDirection="column">
        {routine &&
          routine.currentRoutine.map((c, i) => {
            console.log(c);
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
          })}
      </Box>
      <Button varient="outlined" onClick={() => setNewWorkouts(true)}>
        New Workouts
      </Button>
    </Box>
  );
};
