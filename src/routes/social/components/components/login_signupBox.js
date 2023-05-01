import { Box, TextField, Paper, Typography } from "@mui/material";
import { CommonButton } from "./button";

export const LoginSignUpBox = ({ textFields, button }) => {
  const [buttonTitle, handleButtonClick] = button;
  return (
    <Paper elevation={3}>
      <Box display="flex" flexDirection="column" borderRadius={5} padding={5}>
        {textFields[0][0] === "Code" ? (
          <Typography>Check your email for your code!</Typography>
        ) : null}
        {textFields.map(([label1, id1, onChange1]) => (
          <TextField
            key={id1}
            label={label1}
            id={`${id1}`}
            onChange={onChange1}
            sx={{ backgroundColor: "#FFFFFF", marginTop: 1 }}
          />
        ))}
        <CommonButton title={buttonTitle} callback={handleButtonClick} />
      </Box>
    </Paper>
  );
};
