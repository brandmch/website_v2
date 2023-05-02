import { Box, TextField, Paper, Typography } from "@mui/material";
import { CommonButton } from "./button";
import { useTheme } from "@mui/material/styles";

export const LoginSignUpBox = ({ textFields, button }) => {
  const [buttonTitle, handleButtonClick] = button;
  const theme = useTheme();
  return (
    <Paper elevation={3} sx={{ backgroundColor: "background.paper" }}>
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
            sx={{
              backgroundColor: "#FFFFFF",
              marginTop: 1,
              input: { color: "black" },
              label: { color: "black" },
            }}
          />
        ))}
        <CommonButton title={buttonTitle} callback={handleButtonClick} />
        {button[0] === "Sign In" && (
          <Box marginX="auto" marginTop={2} marginBottom={-2}>
            <Typography variant="body2">
              <a
                href="/social/signup"
                style={{ color: theme.palette.text.primary }}
              >
                Sign up!
              </a>
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};
