import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import ReactCalendar from "react-calendar";
import _ from "lodash";

import "./calendar.css";
import {
  getDateOnChangedMonth,
  getDateWithoutUnit,
  getTitleDate,
} from "./dateUtils";
import { TileClassNameFunc } from "react-calendar/dist/cjs/shared/types";

export const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const calendarRef = useRef<any>(null);

  const handleClickDate = (
    value: unknown,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const selectedDate = value as Date;
    setDate(selectedDate);
  };

  const goNextMonth = () => {
    if (_.isNil(calendarRef.current)) return;
    const nextMonth = getDateOnChangedMonth(date, "next");
    calendarRef.current?.setActiveStartDate(nextMonth);
    setDate(nextMonth);
  };

  const goPrevMonth = () => {
    if (_.isNil(calendarRef.current)) return;
    const prevMonth = getDateOnChangedMonth(date, "prev");
    calendarRef.current.setActiveStartDate(prevMonth);
    setDate(prevMonth);
  };

  const applyClassNameOnTarget: TileClassNameFunc = ({ date }) => {
    if (date.getDay() === 6) {
      return "saturday";
    }
  };

  return (
    <Container>
      <Header>
        <Nav onClick={goPrevMonth}>{"<"}</Nav>
        <Title>{getTitleDate(date)}</Title>
        <Nav onClick={goNextMonth}>{">"}</Nav>
      </Header>
      <ReactCalendar
        ref={calendarRef}
        onChange={handleClickDate}
        value={date}
        calendarType="US"
        locale="ko-KR"
        nextLabel={<button disabled />}
        formatDay={getDateWithoutUnit}
        showNavigation={false}
        tileClassName={applyClassNameOnTarget}
      />
    </Container>
  );
};

const Container = styled.div`
  /* background-color: aqua; */
  /* height: 100vh; */
  margin-top: 1vw;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 1vw;
  background-color: white;
`;

const Title = styled.div`
  font-size: 1rem;
  padding: 2vw 0;
  margin: 0 5vw;
`;

const Nav = styled.button`
  font-size: 1.5rem;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
