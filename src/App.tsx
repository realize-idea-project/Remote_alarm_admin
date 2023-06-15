import React from "react";
import { styled } from "styled-components";
import { Header } from "./components/Header";
import { Schedule } from "./Schedule";

export const App = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Schedule />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  @media screen and (min-width: 1024px) {
    width: 70vw;
  }
`;
