import React from "react";
import { styled } from "styled-components";

import { CustomCalendar } from "./CustomCalendar";
import { Selectors } from "./Selectors/Selectors";
import { FloatingIcon } from "./FloatingIcon";

export const Schedule = () => {
  return (
    <Container>
      <CustomCalendar />
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
