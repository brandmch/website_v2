import HomeScreen from "./screens/home";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const SocialApp = () => {
  const theme = useTheme();
  const socialTheme = createTheme({
    ...theme,
    typography: {
      fontFamily: ["Ubuntu"],
      fontWeightRegular: 100,
    },
  });
  return (
    <ThemeProvider theme={socialTheme}>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default SocialApp;
