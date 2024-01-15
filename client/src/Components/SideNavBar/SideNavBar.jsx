import React from "react";
import SideBarOptions from "../../assets/SideBarOptions";
import SideNavbarItem from "./SideNavBarComps/SideNavbarItem";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "../Common/Button";
import "./SideNavBar.css";
import { NavLink } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar--twitter--icon" />
      {SideBarOptions.map((item) => (
        <NavLink to={item.route} key={item.text}>
          <SideNavbarItem text={item.text} Icon={item.Icon} />
        </NavLink>
      ))}
      <Button size="large">Tweet</Button>
    </div>
  );
};

export default SideNavBar;
