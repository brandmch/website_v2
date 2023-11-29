import { Box, TextField } from "@mui/material";
import { signUp } from "../../../auth/auth-methods";

export const SignUpScreen = () => {
  return (
    <Box>
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" variant="outlined" />
    </Box>
  );
};
