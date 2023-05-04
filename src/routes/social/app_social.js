import HomeScreen from "./screens/home";
import { useContext, createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const SocialApp = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const changeTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useTheme();
  const socialTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          mode,
        },
        typography: {
          fontFamily: ["Ubuntu"],
          fontWeightRegular: 100,
        },
      }),
    [mode]
  );

  return (
    // <ThemeProvider theme={socialTheme}>
    <HomeScreen />
    // </ThemeProvider>
  );
};

export default SocialApp;
