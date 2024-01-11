import Landing from "./_landing/landing";
import DrumMachine from "./drumMachine/drumMachine";
import JavascriptCalulator from "./javascriptCalculator/javascriptcalculator";
import MarkdownPreviewer from "./markdownPreviewer/markdownPreviewer";
import { RandomQuoteMachine } from "./randomQuoteMachine/randomQuoteMachine";
import Timer from "./Timer/timer";
import WeatherApp from "./weather/weather";
import Minesweeper from "./minesweeper/App_minesweeper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./errorElement";
import { BlogHome, BlogPost, PostPost } from "./blog/routes";
import {
  SocialApp,
  Login,
  SignUp,
  Confirm,
  Settings,
  SocialAppTheme,
  ChangePassword,
  DeleteUserConfirmation,
} from "../auth/auth-screens";
import { WorkoutGeneratorLanding, WorkoutScreen, SignUpScreen } from "./workoutGenerator/routes";
import CodeIcon from "@mui/icons-material/Code";
import { QRCodeMain } from "./qrCode/qrCodeDisplay";
import { SendAMessage } from "./qrCode/sendAMessage";
import { NewLanding } from "./_landing/new_landing";

const links = [
  ["SuperSimpleScrum", <CodeIcon />, "https://www.supersimplescrum.com"],
  ["Minesweeper", <CodeIcon />, "/minesweeper"],
  ["Guess What?", <CodeIcon />, "/sendAMessage"],
  ["Blog", <CodeIcon />, "/blog"],
  ["Social", <CodeIcon />, "/social"],
  ["Weather App", <CodeIcon />, "/weather"],
  ["Timer", <CodeIcon />, "/timer"],
  ["JavaScript Calculator", <CodeIcon />, "/javascriptcalulator"],
  ["Drum Machine", <CodeIcon />, "/drummachine"],
  ["Markdown Previewer", <CodeIcon />, "/markdownpreviewer"],
  ["Random Quote Machine", <CodeIcon />, "/randomquotemachine"],
];

const router = createBrowserRouter([
  { path: "/", element: <Landing />, errorElement: <ErrorElement /> },
  { path: "/newLanding", element: <NewLanding />, errorElement: <ErrorElement /> },
  {
    path: "/guessWhat/:message",
    element: <QRCodeMain />,
    errorElement: <ErrorElement />,
    loader: ({ params }) => {
      return params;
    },
  },
  { path: "/sendamessage", element: <SendAMessage />, errorElement: <ErrorElement /> },

  {
    path: "/drummachine",
    element: <DrumMachine />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/javascriptcalulator",
    element: <JavascriptCalulator />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/markdownpreviewer",
    element: <MarkdownPreviewer />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/randomquotemachine",
    element: <RandomQuoteMachine />,
    errorElement: <ErrorElement />,
  },
  { path: "/timer", element: <Timer />, errorElement: <ErrorElement /> },
  { path: "/weather", element: <WeatherApp />, errorElement: <ErrorElement /> },
  {
    path: "/minesweeper",
    element: <Minesweeper />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/social",
    element: <SocialAppTheme component={<SocialApp />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/social/settings/:userid",
    element: <SocialAppTheme component={<Settings />} />,
    errorElement: <ErrorElement />,
    loader: ({ params }) => {
      return params;
    },
  },
  {
    path: "/signup/confirm/:name/:email/:username",
    element: <Confirm />,
    errorElement: <ErrorElement />,
    loader: ({ params }) => {
      return params;
    },
  },
  {
    path: "/changepassword",
    element: <ChangePassword />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/deleteuserconfirmation/:userid",
    element: <DeleteUserConfirmation />,
    errorElement: <ErrorElement />,
    loader: ({ params }) => {
      return params;
    },
  },
  {
    path: "/blog",
    element: <BlogHome />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/blog/:postid",
    element: <BlogPost />,
    errorElement: <ErrorElement />,
    loader: ({ params }) => {
      return params;
    },
  },
  {
    path: `${process.env.REACT_APP_SECRET_SITE1}`,
    element: <PostPost />,
    errorElement: <ErrorElement />,
  },
  {
    path: `${process.env.REACT_APP_SECRET_SITE2}`,
    element: <WorkoutGeneratorLanding />,
    errorElement: <ErrorElement />,
  },
  {
    path: `${process.env.REACT_APP_SECRET_SITE3}`,
    element: <WorkoutScreen />,
    errorElement: <ErrorElement />,
    loader: ({ params }) => {
      return params;
    },
  },
  {
    path: `${process.env.REACT_APP_SECRET_SITE4}`,
    element: <SignUpScreen />,
    errorElement: <ErrorElement />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};
export { Routes, links };
