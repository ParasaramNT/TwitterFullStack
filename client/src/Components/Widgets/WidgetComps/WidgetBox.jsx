import React from "react";
import "./WidgetsBox.css";
import WidgetItemWhoToFollow from "./WidgetItemWhoToFollow";
import WidgetItemHappening from "./WidgetItemHappening";

const WidgetBox = ({ box }) => {
  return (

      <div className="widgetsBox">
        <div>
          <h4>{box}</h4>
          {box == "What's Happening" && <WidgetItemHappening />}
          {box == "Who to Follow" && <WidgetItemWhoToFollow />}
        </div>
      </div>

  );
};

export default WidgetBox;
