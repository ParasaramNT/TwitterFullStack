import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "../../Common/Button";

const WidgetItemWhoToFollow = () => {
  return (
    <div className="widgetItemWhoToFollow">
      <div>
        <Avatar />
        <div>
          <p>SnyderVerse</p>
          <i>@SnyderVerse</i>
        </div>
        <Button size="tiny">Follow</Button>
      </div>
    </div>
  );
};

export default WidgetItemWhoToFollow;
