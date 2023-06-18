import { FC, useState } from "react";
import Fab from "@mui/material/Fab";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography } from "@mui/material";

interface Props {
  onClick: () => void;
  onClickAll: (isSelect: boolean) => void;
  type: "icon" | "text";
}

export const FloatingIcon: FC<Props> = ({ onClick, type, onClickAll }) => {
  const [isAllSelect, setIsAllSelect] = useState(true);

  const handleClick = () => {
    const accepted = confirm("알림을 갱신하겠습니까?");
    if (accepted) {
      onClick();
    }
  };

  const handleClickAll = () => {
    onClickAll(isAllSelect);
    setIsAllSelect(!isAllSelect);
  };

  if (type === "text") {
    return (
      <>
        <div
          style={{
            position: "fixed",
            bottom: "15px",
            right: "10px",
            zIndex: 500,
          }}
        >
          <Fab
            color="info"
            aria-label="add"
            onClick={handleClick}
            variant="extended"
            sx={{ padding: "0 30px" }}
          >
            <CloudUploadIcon sx={{ fontSize: "2rem" }} />
            <div style={{ width: "10px" }} />
            <Typography sx={{ fontSize: "1rem" }}>적용하기</Typography>
          </Fab>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "15px",
            right: "180px",
            zIndex: 500,
          }}
        >
          <Fab
            color="info"
            aria-label="add"
            onClick={handleClickAll}
            variant="extended"
            sx={{ padding: "0 30px" }}
          >
            <DoneAllIcon sx={{ fontSize: "2rem" }} />
            <div style={{ width: "10px" }} />
            <Typography sx={{ fontSize: "1rem" }}>
              {isAllSelect ? "전체선택" : "전체취소"}
            </Typography>
          </Fab>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={{ position: "fixed", bottom: "15px", right: 10, zIndex: 500 }}
      >
        <Fab size="small" color="info" aria-label="add" onClick={handleClick}>
          <CloudUploadIcon />
        </Fab>
      </div>
      <div
        style={{ position: "fixed", bottom: "65px", right: 10, zIndex: 500 }}
      >
        <Fab
          size="small"
          color="info"
          aria-label="add"
          onClick={handleClickAll}
        >
          <Typography sx={{ fontSize: "0.65rem" }}>
            {" "}
            {isAllSelect ? "전체선택" : "전체취소"}
          </Typography>
        </Fab>
      </div>
    </>
  );
};
