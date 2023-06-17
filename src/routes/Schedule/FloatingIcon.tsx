import React, { FC } from "react";
import Fab from "@mui/material/Fab";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";

interface Props {
  onClick: () => void;
}

export const FloatingIcon: FC<Props> = ({ onClick }) => {
  const handleClick = () => {
    const accepted = confirm("알림을 갱신하겠습니까?");
    if (accepted) {
      onClick();
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "15px", right: 10, zIndex: 500 }}>
      <Fab size="small" color="primary" aria-label="add" onClick={handleClick}>
        <AddAlarmIcon />
      </Fab>
    </div>
  );
};
