import _ from "lodash";
import { timeTable } from "../Selectors/timeGenerator";
import { SelectStatus } from "../Selectors/types";

export const pickAlarmTime = (
  selectedDate: number,
  table: typeof timeTable
) => {
  return _.chain(table)
    .entries()
    .map(filterSelectedTime) // 선택된 구간의 끝나는 시간 추려내기
    .reduce(groupByRange, [[]]) // 연속된 구간끼리 묶기
    .filter((date) => !_.isEmpty(date))
    .map((range) => range.map((time) => makeItLocaleString(selectedDate, time)))
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

const makeItLocaleString = (date: number, time: string) => {
  const [hour, minute] = time.split(":");
  const dateObj = new Date();
  dateObj.setDate(date);
  dateObj.setHours(Number(hour));
  dateObj.setMinutes(Number(minute));
  dateObj.setSeconds(0);

  return dateObj.toString();
};
