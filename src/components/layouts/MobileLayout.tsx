import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { SlideUpHeader } from "../headers";
import { BasicDrawer } from "../drawers/BasicDrawer";

export const MobileLayout: FC<PropsWithChildren> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Container>
      <SlideUpHeader onClickIcon={handleDrawerToggle} />
      {children}
      <BasicDrawer isOpen={mobileOpen} onClose={handleDrawerToggle} />
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
