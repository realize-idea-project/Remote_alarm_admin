import { FC } from "react";
import _ from "lodash";

import { ISchedule } from "./type";
import { DateInput } from "./DateInput";
import { styled } from "styled-components";

interface Props {
  list: ISchedule[];
  onSelect: (schedule: ISchedule) => void;
}

export const ScheduleList: FC<Props> = ({ list, onSelect }) => {
  const handleSelect = (schedule: ISchedule) => {
    onSelect(schedule);
  };

  if (_.isEmpty(list)) return null;
  return (
    <Container>
      <Title>예약 목록</Title>
      <div style={{ height: "1rem" }} />

      <div style={{ height: "1rem" }} />
      {list.map((schedule, idx) => {
        return (
          <ListContainer key={idx}>
            <EntryContainer onClick={() => handleSelect(schedule)}>
              <EntryTitle>{`예약${idx}`}</EntryTitle>
              <Blank />
              <div>
                <DateInput value={schedule[1]} title="" disabled />
                <Blank />
                <DateInput value={schedule[2]} title="" disabled />
              </div>
            </EntryContainer>
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
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Blank = styled.div`
  width: 1rem;
`;

const EntryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 3rem;
  border: 1px solid black;
  border-radius: 1rem;
  cursor: pointer;
`;

const EntryTitle = styled.div`
  width: 4rem;
  padding-top: 0.3rem;
  font-size: 1.2rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;
