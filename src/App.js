import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./routes/landing";
import ContactMe from "./routes/contactme";
import DrumMachine from "./routes/drumMachine/drumMachine";
import Projects from "./routes/projects";
import Social from "./routes/social";
import JavascriptCalulator from "./routes/javascriptCalculator/javascriptcalculator";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/drummachine", element: <DrumMachine /> },
  { path: "/contactme", element: <ContactMe /> },
  { path: "/projects", element: <Projects /> },
  { path: "/social", element: <Social /> },
  { path: "/javascriptcalulator", element: <JavascriptCalulator /> },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#388e3c",
      dark: "#00600f",
      light: "#6abf69",
    },
  },
  typography: {
    fontFamily: ["Open Sans"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
