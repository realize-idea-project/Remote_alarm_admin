import React from "react";
import Fab from "@mui/material/Fab";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";

export const FloatingIcon = () => {
  return (
    <div style={{ position: "fixed", bottom: "15px", right: 10, zIndex: 500 }}>
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        onClick={() => {
          alert("hi");
        }}
      >
        <AddAlarmIcon />
      </Fab>
    </div>
  );
};
