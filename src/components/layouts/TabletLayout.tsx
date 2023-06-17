import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { PermanentDrawer } from "../drawers/PermanentDrawer";

export const TabletLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <PermanentDrawer />

      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
