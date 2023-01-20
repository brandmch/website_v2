import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./routes/landing";
import ContactMe from "./routes/contactme";
import DrumMachine from "./routes/drumMachine/drumMachine";
import Projects from "./routes/projects";
import Social from "./routes/social";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/drummachine", element: <DrumMachine /> },
  { path: "/contactme", element: <ContactMe /> },
  { path: "/projects", element: <Projects /> },
  { path: "/social", element: <Social /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
