import { Box, TextField, Paper, Typography } from "@mui/material";
import { CommonButton } from "./button";
import { useTheme } from "@mui/material/styles";

export const LoginSignUpBox = ({
  textFields,
  button,
  text = null,
  bottomText = null,
}) => {
  const [buttonTitle, handleButtonClick] = button;
  const theme = useTheme();
  return (
    <Paper elevation={3} sx={{ backgroundColor: "background.paper" }}>
      <Box display="flex" flexDirection="column" borderRadius={5} padding={5}>
        {text && <Typography>{text}</Typography>}
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
        {bottomText && (
          <Box marginX="auto" marginTop={2} marginBottom={-2}>
            <Typography variant="body2">
              <a
                href={bottomText[1]}
                style={{ color: theme.palette.text.primary }}
              >
                {bottomText[0]}
              </a>
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};
