import React from "react";
import "./SideNavBarItem.css";
import {useState} from "react"
import MoreOverlay from "./MoreOverlay";

const SideNavbarItem = ({ text, Icon, active }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const handleClick = ()=> {
    if (text == "More") {
      setShowOverlay(!showOverlay);
    }
  }
  return (
    <div>
    <div className={`sidebarOption ${active && "sidebarOption--active"}` } onClick= {handleClick}>
      <Icon />
      <h2>{text}</h2>
      {showOverlay && <MoreOverlay/>}
    </div>

    </div>
  );
};


export default SideNavbarItem;
