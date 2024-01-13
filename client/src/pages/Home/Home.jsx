import React from "react";
import "./Home.css";
import SideNavBar from "../../Components/SideNavBar/SideNavBar";
import Widgets from "../../Components/Widgets/Widgets";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="app">
      <SideNavBar />
      <Outlet />
      <Widgets />
    </div>
  );
};

export default Home;
