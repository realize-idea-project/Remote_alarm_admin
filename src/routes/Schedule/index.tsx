import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { styled } from "styled-components";

import { CustomCalendar } from "./CustomCalendar";
import { Selectors } from "./Selectors/Selectors";
import { timeTable } from "./Selectors/timeGenerator";
import { FloatingIcon } from "./FloatingIcon";

export const Schedule = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [selectedTime, setSelectedTime] = useState(timeTable);

  const handleChange = (value: Dayjs | null) => {
    setDate(value);
  };

  const handleToggle = (endTime: string) => {
    const newEntry = {
      id: selectedTime[endTime].id,
      isSelected: !selectedTime[endTime].isSelected,
    };

    setSelectedTime({ ...selectedTime, [endTime]: newEntry });
  };

  return (
    <Container>
      <CustomCalendar currentDate={date} onChangeDate={handleChange} />
      <Selectors selectedTime={selectedTime} onChangeTime={handleToggle} />
      <FloatingIcon />
    </Container>
  );
};

const Container = styled.div`
  overflow-y: scroll;
  padding-bottom: 50px;
  position: relative;
`;
