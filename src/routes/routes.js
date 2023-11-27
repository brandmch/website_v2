import Landing from "./_landing/landing";
import DrumMachine from "./drumMachine/drumMachine";
import JavascriptCalulator from "./javascriptCalculator/javascriptcalculator";
import MarkdownPreviewer from "./markdownPreviewer/markdownPreviewer";
import RandomQuoteMachine from "./randomQuoteMachine/randomQuoteMachine";
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
} from "./social/routes";
import {
  WorkoutGeneratorLanding,
  WorkoutScreen,
  SignUpScreen,
} from "./workoutGenerator/routes";
import CodeIcon from "@mui/icons-material/Code";
import SimpleScrumMain from "./superSimpleScrum/main";

const links = [
  ["Super Simple Scrum", <CodeIcon />, "/simpleScrum"],
  ["Blog", <CodeIcon />, "/blog"],
  ["Social", <CodeIcon />, "/social"],
  ["Minesweeper", <CodeIcon />, "/minesweeper"],
  ["Weather App", <CodeIcon />, "/weather"],
  ["Timer", <CodeIcon />, "/timer"],
  ["JavaScript Calculator", <CodeIcon />, "/javascriptcalulator"],
  ["Drum Machine", <CodeIcon />, "/drummachine"],
  ["Markdown Previewer", <CodeIcon />, "/markdownpreviewer"],
  ["Random Quote Machine", <CodeIcon />, "/randomquotemachine"],
];

const router = createBrowserRouter([
  { path: "/", element: <Landing />, errorElement: <ErrorElement /> },
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
    path: "/social/login",
    element: <SocialAppTheme component={<Login />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/social/signup",
    element: <SocialAppTheme component={<SignUp />} />,
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
    path: "/social/signup/confirm/:name/:email/:username",
    element: <SocialAppTheme component={<Confirm />} />,
    errorElement: <ErrorElement />,
    loader: ({ params }) => {
      return params;
    },
  },
  {
    path: "/social/changepassword",
    element: <SocialAppTheme component={<ChangePassword />} />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/social/deleteuserconfirmation/:userid",
    element: <SocialAppTheme component={<DeleteUserConfirmation />} />,
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
  {
    path: "/simpleScrum",
    element: <SimpleScrumMain />,
    errorElement: <ErrorElement />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};
export { Routes, links };
