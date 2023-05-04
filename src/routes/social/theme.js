import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useContext, createContext, useState, useMemo } from "react";

export const SocialAppTheme = ({ component }) => {
  const [mode, setMode] = useState("light");
  const theme = useTheme();
  const socialTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                text: {
                  primary: "#000000",
                  secondary: "#FFFFFF",
                },
                background: { primary: "#E2EAFF", paper: "#FFFFFF" },
                button: "#0046FF",
              }
            : {
                // palette values for dark mode
                text: {
                  primary: "#fff",
                  secondary: "#000000",
                },
                background: { primary: "#000000", paper: "#00278D" },
                button: "#E2EAFF",
                textField: { fontColor: "#000000" },
              }),
        },
        typography: {
          fontFamily: ["Ubuntu"],
          fontWeightRegular: 100,
        },
      }),
    [mode]
  );

  return <ThemeProvider theme={socialTheme}>{component}</ThemeProvider>;
};
