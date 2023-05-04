import Landing from "./_landing/landing";
import DrumMachine from "./drumMachine/drumMachine";
import JavascriptCalulator from "./javascriptCalculator/javascriptcalculator";
import MarkdownPreviewer from "./markdownPreviewer/markdownPreviewer";
import RandomQuoteMachine from "./randomQuoteMachine/randomQuoteMachine";
import Timer from "./Timer/timer";
import WeatherApp from "./weather/weather";
import Minesweeper from "./minesweeper/App_minesweeper";
import SocialApp from "./social/app_social";
import Login from "./social/screens/login";
import SignUp from "./social/screens/signUp";
import Confirm from "./social/screens/confirm";
import Settings from "./social/screens/settings";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SocialAppTheme } from "./social/theme";
import { ChangePassword } from "./social/screens/changePassword";
import { DeleteUserConfirmation } from "./social/screens/deleteUserConfirmation";

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
  {
    path: "/social",
    element: <SocialAppTheme component={<SocialApp />} />,
  },
  {
    path: "/social/login",
    element: <SocialAppTheme component={<Login />} />,
  },
  {
    path: "/social/signup",
    element: <SocialAppTheme component={<SignUp />} />,
  },
  {
    path: "/social/settings/:userid",
    element: <SocialAppTheme component={<Settings />} />,
    loader: ({ params }) => {
      return params;
    },
  },
  {
    path: "/social/signup/confirm/:name/:email/:username",
    element: <SocialAppTheme component={<Confirm />} />,
    loader: ({ params }) => {
      return params;
    },
  },
  {
    path: "/social/changepassword",
    element: <SocialAppTheme component={<ChangePassword />} />,
  },
  {
    path: "/social/deleteuserconfirmation/:userid",
    element: <SocialAppTheme component={<DeleteUserConfirmation />} />,
    loader: ({ params }) => {
      return params;
    },
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
