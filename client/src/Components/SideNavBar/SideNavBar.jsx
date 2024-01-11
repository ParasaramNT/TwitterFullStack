import React from "react";
import SideBarOptions from "../../assets/SideBarOptions";
import SideNavbarItem from "./SideNavBarComps/SideNavbarItem";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "../Common/Button";
import "./SideNavBar.css";

const SideNavBar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar--twitter--icon" />
      {SideBarOptions.map((item) => (
        <SideNavbarItem
          key={item.text}
          text={item.text}
          Icon={item.Icon}
          active={item.active}
        />
      ))}
      <Button size="large">Tweet</Button>
    </div>
  );
};

export default SideNavBar;
