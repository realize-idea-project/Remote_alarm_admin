import React, { useState } from "react";
import { styled } from "styled-components";

import { CustomCalendar } from "./Calendar/Calendar";

export const Schedule = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <CustomCalendar />
    </Container>
  );
};

const Container = styled.div`
  background-color: aqua;
  height: 100vh;
`;
