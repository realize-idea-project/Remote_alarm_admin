import React, { FC } from "react";
import Fab from "@mui/material/Fab";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import { Typography } from "@mui/material";

interface Props {
  onClick: () => void;
  type: "icon" | "text";
}

export const FloatingIcon: FC<Props> = ({ onClick, type }) => {
  const handleClick = () => {
    const accepted = confirm("알림을 갱신하겠습니까?");
    if (accepted) {
      onClick();
    }
  };

  if (type === "text") {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "15px",
          right: "10px",
          zIndex: 500,
        }}
      >
        <Fab
          // size="large"
          color="primary"
          aria-label="add"
          onClick={handleClick}
          variant="extended"
          sx={{ padding: "0 30px" }}
        >
          <AddAlarmIcon sx={{ fontSize: "2rem" }} />
          <div style={{ width: "10px" }} />
          <Typography sx={{ fontSize: "1rem" }}>적용하기</Typography>
        </Fab>
      </div>
    );
  }

  return (
    <div style={{ position: "fixed", bottom: "15px", right: 10, zIndex: 500 }}>
      <Fab size="small" color="primary" aria-label="add" onClick={handleClick}>
        <AddAlarmIcon />
      </Fab>
    </div>
  );
};
