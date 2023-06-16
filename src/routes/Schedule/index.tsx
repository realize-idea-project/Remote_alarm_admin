import React, { useState } from "react";
import { styled } from "styled-components";

export const Schedule = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ddd;
  height: 100vh;
`;
