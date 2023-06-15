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
import { colorSaturdayBlue } from "./calendarStyling";

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
    return colorSaturdayBlue(date);
  };

  // const tileContent = ({ date, view }: any) => {
  //   if (view === "month") {
  //     return (
  //       <div className="day-header">
  //         {date.toLocaleDateString("en-US", { weekday: "short" })}
  //       </div>
  //     );
  //   }
  //   return null;
  // };

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
        // tileContent={tileContent}
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
