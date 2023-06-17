import { FC } from "react";
import _ from "lodash";
import { styled } from "styled-components";
import { List, ListItem } from "@mui/material";
import Switch from "@mui/material/Switch";
import { RANGE_LIST, timeTable } from "./timeGenerator";
import { getTimeInHHMM } from "./timeUtils";
import { HorizontalSelectors } from "./HorizontalSelectors";

interface Props {
  selectedTime: typeof timeTable;
  onChangeTime: (time: string) => void;
  horizontal?: boolean;
}

export const Selectors: FC<Props> = ({
  selectedTime,
  onChangeTime,
  horizontal,
}) => {
  if (horizontal) {
    return (
      <HorizontalSelectors
        selectedTime={selectedTime}
        onChangeTime={onChangeTime}
      />
    );
  }

  return (
    <List>
      {RANGE_LIST.map(([start, end]) => {
        const startTime = getTimeInHHMM(start);
        const endTime = getTimeInHHMM(end);
        const checked = selectedTime[endTime].isSelected;
        return (
          <ListItem key={start.toString()}>
            <RowItem>
              <RowItem>
                <Switch
                  size="small"
                  checked={checked}
                  onChange={() => {
                    onChangeTime(endTime);
                  }}
                />
              </RowItem>
              <TimeRange start={startTime} end={endTime} checked={checked} />
            </RowItem>
          </ListItem>
        );
      })}
    </List>
  );
};

const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface RangeProps {
  start: string;
  end: string;
  checked: boolean;
}

const TimeRange: FC<RangeProps> = ({ start, end, checked }) => {
  return (
    <RangeContainer $checked={checked}>
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
  padding: 8px 20px;
  border: 0.8px solid ${({ $checked }) => ($checked ? "#1976d2" : "lightgray")};
  border-radius: 5px;
  /* width: 200px; */

  font-size: 0.8rem;
  margin-left: 20px;
`;

const Dash = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
