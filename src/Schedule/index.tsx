import React, { useState } from "react";
import { styled } from "styled-components";

import { CustomCalendar } from "./Calendar/Calendar";
import { Selector } from "./Selector/Selector";

export const Schedule = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <CustomCalendar />
      {/* <Selector /> */}
    </Container>
  );
};

const Container = styled.div`
  background-color: #ddd;
  height: 100vh;
`;
