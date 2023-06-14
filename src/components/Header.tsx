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
          return <Tab isActive={isSelected}>{t.title}</Tab>;
        })}
      </div>
      <div>
        <Logout>로그아웃</Logout>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 3vw;
  min-height: 40px;

  display: flex;
  padding: 0 3vw;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid lightgray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Tab = styled.div<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "blue" : "black")};
`;

const Logout = styled.div``;
