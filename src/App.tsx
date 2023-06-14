import React from "react";
import { Header } from "./components/Header";
import { Schedule } from "./Schedule/Schedule";
import { Calendar } from "./Calendar";
import { styled } from "styled-components";

export const App = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Calendar />
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
