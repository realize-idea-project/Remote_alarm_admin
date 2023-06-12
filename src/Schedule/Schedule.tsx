import { useState } from "react";
import _ from "lodash";
import { ScheduleInput } from "./ScheduleInput";
import { ScheduleList } from "./ScheduleList";
import { ISchedule } from "./type";
import { useRealTimeDB } from "../firebase/useRealTimeDB";
import { styled } from "styled-components";

export const Schedule = () => {
  const { setData } = useRealTimeDB();
  const [scheduleList, setScheduleList] = useState<ISchedule[]>([]);

  const addSchedule = (schdl: ISchedule) => {
    const newSchedule = [...scheduleList, schdl];
    setScheduleList(newSchedule);
  };

  const applyAlarm = () => {
    const stringify = JSON.stringify(scheduleList);
    const date = new Date().getDate();
    setData(date, stringify);
  };

  return (
    <Container>
      <ScheduleList list={scheduleList} />
      <ScheduleInput onSubmit={addSchedule} />
      {!_.isEmpty(scheduleList) && (
        <ApplyButton onClick={applyAlarm}>알림 설정하기</ApplyButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ApplyButton = styled.div`
  font-size: 1rem;
  background-color: yellowgreen;
  display: inline-block;
  padding: 1rem 4rem;
  border-radius: 2rem;
  margin-top: 4rem;
  cursor: pointer;
`;
