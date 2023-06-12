import { FC } from "react";
import _ from "lodash";

import { ISchedule } from "./type";
import { DateInput } from "./DateInput";
import { styled } from "styled-components";

interface Props {
  list: ISchedule[];
}

export const ScheduleList: FC<Props> = ({ list }) => {
  if (_.isEmpty(list)) return null;
  return (
    <Container>
      <div>예약 목록</div>
      <div style={{ height: "1rem" }} />

      <div style={{ height: "1rem" }} />
      {list.map((schdl, idx) => {
        return (
          <ListContainer key={idx}>
            <EntryTitle>{`예약${idx}`}</EntryTitle>
            <Blank />
            <DateInput value={schdl[0]} title="" disabled />
            <Blank />
            <DateInput value={schdl[1]} title="" disabled />
          </ListContainer>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0rem;
`;

const Blank = styled.div`
  width: 1rem;
`;

const EntryTitle = styled.div`
  width: 4rem;
`;
