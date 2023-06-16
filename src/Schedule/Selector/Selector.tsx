import React from "react";
import styled from "styled-components";
import { TimeGenerator } from "./timeGenerator";

const TIME_LIST = new TimeGenerator(9, 24).generate().getList();

export const Selector = () => {
  return <Container>hi</Container>;
};

const Container = styled.div`
  background-color: white;
  margin-top: 10vw;
`;
