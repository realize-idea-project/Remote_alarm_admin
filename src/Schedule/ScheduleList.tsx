import { MouseEvent, FC } from "react";
import _ from "lodash";

import { ISchedule } from "./type";
import { DateInput } from "./DateInput";
import { styled } from "styled-components";

interface Props {
  list: ISchedule[];
  onSelect: (schedule: ISchedule) => void;
  onDelete: (schedule: ISchedule) => void;
}

export const ScheduleList: FC<Props> = ({ list, onSelect, onDelete }) => {
  const handleSelect = (schedule: ISchedule) => {
    onSelect(schedule);
  };

  const handleDelete =
    (schedule: ISchedule) => (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDelete(schedule);
    };

  if (_.isEmpty(list)) return null;
  return (
    <Container>
      <Title>예약 목록</Title>
      <div style={{ height: "1rem" }} />
      <ListContainer>
        {list.map((schedule, idx) => {
          return (
            <EntryContainer key={idx} onClick={() => handleSelect(schedule)}>
              <EntryTitle>{`예약${idx}`}</EntryTitle>
              <Blank />
              <div>
                <DateInput value={schedule[1]} title="" disabled />
                <Blank />
                <DateInput value={schedule[2]} title="" disabled />
              </div>
              <CloseIcon onClick={handleDelete(schedule)}>X</CloseIcon>
            </EntryContainer>
          );
        })}
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const ListContainer = styled.div`
  max-height: 24rem;
  overflow-y: auto;
`;

const Blank = styled.div`
  width: 1rem;
`;

const EntryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 4rem 1rem 2rem;
  border: 1px solid black;
  border-radius: 1rem;
  cursor: pointer;
  position: relative;
  margin-bottom: 1rem;
`;

const EntryTitle = styled.div`
  width: 3rem;
  padding-top: 0.3rem;
  font-size: 1.2rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;

const CloseIcon = styled.button`
  position: absolute;
  right: 1rem;
`;
