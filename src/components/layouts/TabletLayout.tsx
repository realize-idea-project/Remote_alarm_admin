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
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding-top: 70px;
  padding-left: 20px;
  padding-right: 20px;
`;
