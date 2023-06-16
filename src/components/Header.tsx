import React, { useState } from "react";
import styled from "styled-components";

const tabDefine = [
  {
    id: "calendar",
    title: "일정관리",
  },
];

export const Header = () => {
  const [selectedTab, setSelectedTab] = useState(tabDefine[0]);

  return (
    <Container>
      <div>
        {tabDefine.map((t) => {
          const isSelected = t.id === selectedTab.id;
          return (
            <Tab key={t.title} isSelected={isSelected}>
              {t.title}
            </Tab>
          );
        })}
      </div>
      <div>
        <Logout>로그아웃</Logout>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid lightgray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  width: 100%;
  height: 3vw;
  min-height: 40px;

  padding: 0 3vw;
`;

// warning: React does not recognize the `isSelected` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `isselected` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
const Tab = styled.div<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "blue" : "black")};
`;

const Logout = styled.div``;
