import _ from "lodash";
import { timeTable } from "../Selectors/timeGenerator";
import { SelectStatus } from "../Selectors/types";

export const pickAlarmTime = (table: typeof timeTable) => {
  return _.chain(table)
    .entries()
    .map(filterSelectedTime) // 선택된 구간의 끝나는 시간 추려내기
    .reduce(groupByRange, [[]]) // 연속된 구간끼리 묶기
    .filter((date) => !_.isEmpty(date))
    .map((range) => range[range.length - 1]) // 구간의 마지막 시간만 가져가기
    .value();
};

const filterSelectedTime = ([key, { isSelected }]: [string, SelectStatus]) =>
  isSelected ? key : "";

const groupByRange = (acc: string[][], cur: string) => {
  if (!_.isEmpty(cur)) {
    acc[acc.length - 1].push(cur);
  } else {
    acc.push([]);
  }

  return acc;
};
