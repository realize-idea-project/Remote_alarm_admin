import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { PermanentDrawer } from "../drawers/PermanentDrawer";
// import { SideNavigation } from "../navigations";
// import { FilterHeader } from "../headers";

export const TabletLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <PermanentDrawer />
      {children}
      {/* <SideNavigation />
      <div>
        <FilterHeader />
        {children}
      </div> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
