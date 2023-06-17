import { FC } from "react";
import _ from "lodash";
import { styled } from "styled-components";

import { RANGE_LIST, timeTable } from "./timeGenerator";
import { getTimeInHHMM } from "./timeUtils";

interface Props {
  selectedTime: typeof timeTable;
  onChangeTime: (time: string) => void;
}

export const HorizontalSelectors: FC<Props> = ({
  selectedTime,
  onChangeTime,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "20px",
        paddingBottom: "50px",
      }}
    >
      {RANGE_LIST.map(([start, end]) => {
        const startTime = getTimeInHHMM(start);
        const endTime = getTimeInHHMM(end);
        const checked = selectedTime[endTime].isSelected;
        return (
          <div key={start.toString()} style={{ margin: "10px 0" }}>
            <TimeRange
              start={startTime}
              end={endTime}
              checked={checked}
              onClick={onChangeTime}
            />
          </div>
        );
      })}
    </div>
  );
};

interface RangeProps {
  start: string;
  end: string;
  checked: boolean;
  onClick: (time: string) => void;
}

const TimeRange: FC<RangeProps> = ({ start, end, checked, onClick }) => {
  return (
    <RangeContainer $checked={checked} onClick={() => onClick(end)}>
      <div>{start}</div>
      <Dash>-</Dash>
      <div>{end}</div>
    </RangeContainer>
  );
};

const RangeContainer = styled.div<{ $checked: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 10px;
  border-radius: 5px;

  border: 1.2px solid ${({ $checked }) => ($checked ? "#1976d2" : "lightgray")};
  background-color: ${({ $checked }) => ($checked ? "#1976d2" : "white")};
  color: ${({ $checked }) => ($checked ? "white" : "rgba(0, 0, 0, 0.87)")};

  cursor: pointer;
  font-size: 1rem;
  margin-left: 20px;
`;

const Dash = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
