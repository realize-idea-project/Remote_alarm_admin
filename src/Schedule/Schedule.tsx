import { useEffect, useState } from "react";
import _ from "lodash";
import { ScheduleInput } from "./ScheduleInput";
import { ScheduleList } from "./ScheduleList";
import { ISchedule } from "./type";
import { useRealTimeDB } from "../firebase/useRealTimeDB";
import { styled } from "styled-components";

export const Schedule = () => {
  const { setData, getData } = useRealTimeDB();
  const [scheduleList, setScheduleList] = useState<ISchedule[]>([]);
  const [selectedSchedule, setSelectedSchedule] = useState<ISchedule>();
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    getData().then((res) => {
      const date = new Date().getDate();
      const currentSchedule = res[date];
      if (!_.isNil(currentSchedule)) {
        const parsed = JSON.parse(currentSchedule);
        setScheduleList(parsed);
      }
    });
  }, []);

  const addSchedule = (schedule: ISchedule) => {
    const newSchedule = [...scheduleList, schedule];
    setScheduleList(newSchedule);
    setHasChanged(true);
  };

  const editSchedule = (schedule: ISchedule) => {
    const newSchedule = scheduleList.map((schdl) =>
      schdl[0] === schedule[0] ? schedule : schdl
    );

    setScheduleList(newSchedule);
    setHasChanged(true);
  };

  const deleteSchedule = (schedule: ISchedule) => {
    const newSchedule = scheduleList.filter(
      (schdl) => schdl[0] !== schedule[0]
    );

    setScheduleList(newSchedule);
    setHasChanged(true);
  };

  const applyAlarm = () => {
    try {
      const stringify = JSON.stringify(scheduleList);
      const date = new Date().getDate();
      setData(date, stringify);
      alert("알림이 갱신되었습니다.");
    } catch (err) {
      console.error(err);
      alert("알림 갱신에 실패하였습니다.");
    }
  };

  const selectSchedule = (schedule: ISchedule) => {
    setSelectedSchedule(schedule);
  };

  const cancelSelect = () => {
    setSelectedSchedule(undefined);
  };

  return (
    <Container>
      <ScheduleList
        list={scheduleList}
        onSelect={selectSchedule}
        onDelete={deleteSchedule}
      />
      <ScheduleInput
        onSubmit={addSchedule}
        onCancel={cancelSelect}
        onEdit={editSchedule}
        selectedSchedule={selectedSchedule}
      />
      {(!_.isEmpty(scheduleList) || hasChanged) && (
        <ApplyButton onClick={applyAlarm}>알림 설정하기</ApplyButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  align-items: center;
  height: 100%;
`;

const ApplyButton = styled.div`
  font-size: 1rem;
  background-color: yellowgreen;
  display: inline-block;
  padding: 1rem 4rem;
  border-radius: 2rem;
  margin-top: 2rem;
  cursor: pointer;
`;
