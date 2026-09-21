import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/Explore";
import Community from "../pages/Community/Community";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/community",
        element: <Community />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);