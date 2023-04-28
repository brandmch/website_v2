import React from "react";
import "./App.css";
import Routes from "./routes/routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const theme = createTheme({
  palette: {
    primary: {
      main: "#388e3c",
      dark: "#00600f",
      light: "#6abf69",
    },
    header: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: ["Open Sans"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
