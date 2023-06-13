import React, { FC, ChangeEvent, useState, useEffect } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { DateInput } from "./DateInput";
import { ISchedule } from "./type";

const INIT: ISchedule = ["", "", ""];

interface Props {
  onSubmit: (schedule: ISchedule) => void;
  onEdit: (schedule: ISchedule) => void;
  onCancel: () => void;
  selectedSchedule?: ISchedule;
}

export const ScheduleInput: FC<Props> = ({
  onSubmit,
  onEdit,
  selectedSchedule,
  onCancel,
}) => {
  const [schedule, setSchedule] = useState<ISchedule>(INIT);
  const isEditable = !_.isEmpty(selectedSchedule?.[0]);

  useEffect(() => {
    setSchedule(selectedSchedule ?? INIT);
  }, [selectedSchedule]);

  const changeStart = (event: ChangeEvent<HTMLInputElement>) => {
    setSchedule((prev) => [prev[0], event.target.value, prev[2]]);
  };

  const changeEnd = (event: ChangeEvent<HTMLInputElement>) => {
    setSchedule((prev) => [prev[0], prev[1], event.target.value]);
  };

  const submit = () => {
    if (!_.isEmpty(schedule[1]) && !_.isEmpty(schedule[2])) {
      onSubmit([schedule[0] || uuidv4(), schedule[1], schedule[2]]);
      setSchedule(INIT);
    }
  };

  const cancelEdit = () => {
    onCancel();
  };

  const edit = () => {
    onEdit([schedule[0] || uuidv4(), schedule[1], schedule[2]]);
    onCancel();
  };

  return (
    <Container>
      <div>
        <Blank />
        <div>{isEditable ? "예약을 수정해주세요" : "예약을 추가해주세요"}</div>
        <Blank />

        <DateInput title="시작" value={schedule[1]} onChange={changeStart} />
        <Blank />
        <DateInput title="종료" value={schedule[2]} onChange={changeEnd} />
      </div>
      <Blank />
      {isEditable ? (
        <>
          <SubmitButton onClick={edit}>수정</SubmitButton>
          <SubmitButton onClick={cancelEdit}>취소</SubmitButton>
        </>
      ) : (
        <SubmitButton onClick={submit}>추가</SubmitButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: lightgray;
  padding: 1rem 2rem;
  display: inline-block;
  border-radius: 1rem;
`;

const Blank = styled.div`
  height: 1rem;
`;

const SubmitButton = styled.div`
  background-color: black;
  color: white;
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.8rem 2rem;
  border-radius: 2rem;

  cursor: pointer;
`;
