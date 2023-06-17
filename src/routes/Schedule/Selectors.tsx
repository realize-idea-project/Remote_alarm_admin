import React, { FC } from "react";
import _ from "lodash";
import { styled } from "styled-components";
import { List, ListItem, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { RANGE_LIST } from "./timeGenerator";
import { getTimeInYYMM } from "./timeUtils";

export const Selectors = () => {
  console.log("LIST", RANGE_LIST);
  return (
    <List>
      {RANGE_LIST.map(([start, end]) => {
        return (
          <ListItem key={start.toString()} sx={{ marginLeft: "2vw" }}>
            <RowItem>
              <RowItem>
                <Switch size="small" />
                <Typography>on</Typography>
              </RowItem>
              <TimeRange
                start={getTimeInYYMM(start)}
                end={getTimeInYYMM(end)}
              />
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
}

const TimeRange: FC<RangeProps> = ({ start, end }) => {
  return (
    <RangeContainer>
      <div>{start}</div>
      <Dash>-</Dash>
      <div>{end}</div>
    </RangeContainer>
  );
};

const RangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 20px;
  border: 0.8px solid lightgray;
  border-radius: 5px;
  /* width: 200px; */

  font-size: 0.8rem;
  margin-left: 20px;
`;

const Dash = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
