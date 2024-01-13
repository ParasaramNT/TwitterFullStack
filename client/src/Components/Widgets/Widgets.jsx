import React from "react";
import "./Widgets.css";
import WidgetBox from "./WidgetComps/WidgetBox";

const Widgets = () => {
  return (
    <div className="widgets">
      <WidgetBox box="What's Happening" />
      <WidgetBox box="Who to Follow" />
    </div>
  );
};

export default Widgets;
