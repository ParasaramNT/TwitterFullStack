import React from "react";
import Feed from "../../Components/FeedPage/Feed";
import SideNavBar from "../../Components/SideNavBar/SideNavBar";
import Widgets from "../../Components/Widgets/Widgets";

import "./Home.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="app">
      <SideNavBar />
      <Feed />
      <Outlet />
      <Widgets />
    </div>
  );
};

export default Home;
