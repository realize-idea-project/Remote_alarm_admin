import React from "react";
import { styled } from "styled-components";

import { CustomCalendar } from "./CustomCalendar";
import { Selectors } from "./Selectors/Selectors";

export const Schedule = () => {
  return (
    <Container>
      <CustomCalendar />
      <Selectors />
    </Container>
  );
};

const Container = styled.div`
  overflow-y: scroll;
  padding-bottom: 70vw;
`;
