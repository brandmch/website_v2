import { Box, Typography, Button, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import capitalize from "../../../utils/capitalize";
import { useState } from "react";
import { useEffect } from "react";
import WorkoutRoutine from "../components/workout_class";
import { signUp } from "../../../auth/auth-methods";

export const WorkoutScreen = () => {
  const { created } = useParams();
  const [routine, setRoutine] = useState();
  const [newWorkouts, setNewWorkouts] = useState(false);

  useEffect(() => {
    setRoutine(new WorkoutRoutine(created.split(",")));
  }, []);

  const reroll = (current, index) => {
    routine.reroll(current, index);
    setNewWorkouts(!newWorkouts);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      padding={5}
      backgroundColor="black"
      minHeight="100vh"
    >
      <Paper display="flex" flexDirection="column" sx={{ padding: 2 }}>
        {routine &&
          routine.currentRoutine.map((current, i) => {
            const name = capitalize(current.name);
            const bodyPart = capitalize(current.bodyPart);
            const secondaryMuscles = capitalize(current.secondaryMuscles);
            return (
              <Box key={i} margin={1} marginBottom={2}>
                <Typography fontSize={20}>{name}</Typography>
                <Typography>{bodyPart}</Typography>
                <Typography>{secondaryMuscles.join(", ")}</Typography>
                <Box display="flex" justifyContent="center">
                  <Button varient="outlined" onClick={() => reroll(current, i)}>
                    ReRoll
                  </Button>
                </Box>
              </Box>
            );
          })}
      </Paper>
    </Box>
  );
};
