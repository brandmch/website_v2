import Landing from "./_landing/landing";
import DrumMachine from "./drumMachine/drumMachine";
import JavascriptCalulator from "./javascriptCalculator/javascriptcalculator";
import MarkdownPreviewer from "./markdownPreviewer/markdownPreviewer";
import RandomQuoteMachine from "./randomQuoteMachine/randomQuoteMachine";
import Timer from "./Timer/timer";
import WeatherApp from "./weather/weather";
import Minesweeper from "./minesweeper/App_minesweeper";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/drummachine", element: <DrumMachine /> },
  { path: "/javascriptcalulator", element: <JavascriptCalulator /> },
  { path: "/markdownpreviewer", element: <MarkdownPreviewer /> },
  { path: "/randomquotemachine", element: <RandomQuoteMachine /> },
  { path: "/randomquotemachine", element: <RandomQuoteMachine /> },
  { path: "/timer", element: <Timer /> },
  { path: "/weather", element: <WeatherApp /> },
  { path: "/minesweeper", element: <Minesweeper /> },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
