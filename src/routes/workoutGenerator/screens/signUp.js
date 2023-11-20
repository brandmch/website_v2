import { Box, TextField } from "@mui/material";
import { signUp } from "../../social/auth/utils";

export const SignUpScreen = () => {
  return (
    <Box>
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" variant="outlined" />
    </Box>
  );
};
