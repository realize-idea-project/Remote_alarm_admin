import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  time: string;
  isLast: boolean;
  onClick: (time: string) => void;
  isSelected: boolean;
}

export const TimeButton: FC<Props> = ({
  time,
  isLast,
  onClick,
  isSelected,
}) => {
  const handleClick = () => {
    onClick(time);
  };

  return (
    <SelectorContainer>
      <TimeText>{time}</TimeText>

      <SelectorButton
        $show={!isLast}
        $isSelected={isSelected}
        disabled={isLast}
        onClick={handleClick}
      />
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  padding-top: 6vw;
  border: 1px solid red;
  position: relative;
`;

const SelectorButton = styled.button<{ $show: boolean; $isSelected: boolean }>`
  padding: 8vw 8vw;
  border: 1px solid red;
  background-color: ${({ $isSelected }) => ($isSelected ? "green" : "white")};
  display: ${({ $show }) => ($show ? "auto" : "none")};
  cursor: ${({ $show }) => ($show ? "pointer" : "none")};
`;

const TimeText = styled.div`
  font-size: 1.2rem;
`;
