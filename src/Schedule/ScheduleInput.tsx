import React, { FC, ChangeEvent, useState } from "react";
import styled from "styled-components";
import { DateInput } from "./DateInput";

interface Props {
  onSubmit: (schedule: [string, string]) => void;
}

export const ScheduleInput: FC<Props> = ({ onSubmit }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const changeStart = (event: ChangeEvent<HTMLInputElement>) => {
    setStart(event.target.value);
  };

  const changeEnd = (event: ChangeEvent<HTMLInputElement>) => {
    setEnd(event.target.value);
  };

  const submit = () => {
    onSubmit([start, end]);
    setStart("");
    setEnd("");
  };

  return (
    <Container>
      <div>
        <Blank />
        <div>예약을 추가해주세요</div>
        <Blank />

        <DateInput title="시작" value={start} onChange={changeStart} />
        <Blank />
        <DateInput title="종료" value={end} onChange={changeEnd} />
      </div>
      <Blank />
      <SubmitButton onClick={submit}>추가</SubmitButton>
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
  margin-left: 7rem;
  cursor: pointer;
`;
