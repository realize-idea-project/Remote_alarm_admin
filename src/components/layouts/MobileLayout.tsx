import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { SlideUpHeader } from "../headers";
// import { BottomNavigation } from "../navigations";
// import { FilterHeader } from "../headers";

export const MobileLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <SlideUpHeader />
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
`;
