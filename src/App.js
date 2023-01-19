import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./routes/landing";
import DrumMachine from "./routes/drumMachine/drumMachine";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/drummachine", element: <DrumMachine /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
