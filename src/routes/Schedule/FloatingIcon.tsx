import React, { FC } from "react";
import Fab from "@mui/material/Fab";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";

interface Props {
  onClick: () => void;
  size: "small" | "large";
}

export const FloatingIcon: FC<Props> = ({ onClick, size }) => {
  const handleClick = () => {
    const accepted = confirm("알림을 갱신하겠습니까?");
    if (accepted) {
      onClick();
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "15px", right: 10, zIndex: 500 }}>
      <Fab size={size} color="primary" aria-label="add" onClick={handleClick}>
        <AddAlarmIcon />
      </Fab>
    </div>
  );
};
