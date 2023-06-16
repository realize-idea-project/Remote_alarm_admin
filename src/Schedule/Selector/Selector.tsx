import styled from "styled-components";
import { TIME_LIST, timeTable } from "./timeGenerator";
import { TimeButton } from "./TimeButton";
import { useSelectCount } from "./useSelectCount";
import { useSelectStatus } from "./useSelectStatus";
import { getTimeInYYMM } from "./timeUtils";

// 첫 시기일때,
//  눌럿던거 누르면 취소
//  빈거 누르면 선택

// 둘 시기때,
//   눌럿던거 누르면 미작동 ( 자기 자신은 취소)
//   빈거 누르면 선택 > 정렬 > 시기 초기화

export const Selector = () => {
  const { isSelected, select, unselect } = useSelectStatus(timeTable);
  const { add, pop, clear, status } = useSelectCount();

  const handleSelect = (time: string) => {
    console.log("status1", status);
    select(time);
    add();
  };

  const handleUnselect = (time: string) => {
    console.log("status2", status);
    unselect(time);
    pop();
  };

  const selectTime = (time: string) => {
    if (isSelected(time)) {
      console.log("unselect");
      handleUnselect(time);
    } else {
      console.log("select");
      handleSelect(time);
    }
  };

  return (
    <Container>
      {TIME_LIST.map((entry, idx, arr) => {
        const id = getTimeInYYMM(entry);
        return (
          <TimeButton
            key={id}
            time={id}
            isSelected={isSelected(id)}
            isLast={idx === arr.length - 1}
            onClick={selectTime}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  background-color: white;
  margin-top: 10vw;
  padding: 2vw 10vw;
`;
