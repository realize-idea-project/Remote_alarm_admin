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
      <Title>예약 목록</Title>
      <div style={{ height: "1rem" }} />

      <div style={{ height: "1rem" }} />
      {list.map((schdl, idx) => {
        return (
          <ListContainer key={idx}>
            <EntryContainer>
              <EntryTitle>{`예약${idx}`}</EntryTitle>
              <Blank />
              <div>
                <DateInput value={schdl[0]} title="" disabled />
                <Blank />
                <DateInput value={schdl[1]} title="" disabled />
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
  padding: 0.5rem 0rem;
`;

const EntryTitle = styled.div`
  width: 4rem;
  padding-top: 0.3rem;
  font-size: 1.2rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;
