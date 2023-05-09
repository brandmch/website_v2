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
import ErrorElement from "./errorElement";
import { BlogHome } from "./blog/home";
import { BlogPost } from "./blog/blogPost";
import { PostPost } from "./blog/postPost";

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
    path: "/blog/post",
    element: <PostPost />,
    errorElement: <ErrorElement />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
