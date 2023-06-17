import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { styled } from "styled-components";

import { CustomCalendar } from "./CustomCalendar";
import { Selectors } from "./Selectors/Selectors";
import { FloatingIcon } from "./FloatingIcon";

export const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs(new Date())
  );

  const handleChange = (value: Dayjs | null) => {
    setSelectedDate(value);
  };

  return (
    <Container>
      <CustomCalendar currentDate={selectedDate} onChangeDate={handleChange} />
      <Selectors />
      <FloatingIcon />
    </Container>
  );
};

const Container = styled.div`
  overflow-y: scroll;
  padding-bottom: 50px;
  position: relative;
`;
