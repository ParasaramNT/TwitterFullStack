import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";
import Messages from "./pages/Messages/Messages";
import Lists from "./pages/Lists/Lists";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Profile from "./pages/Profile/Profile";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    Children: [
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notification",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "list",
        element: <Lists />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <div className="app">
        <Outlet />
      </div>
    </RouterProvider>
  );
};

export default App;
