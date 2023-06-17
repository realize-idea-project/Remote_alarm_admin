import _ from "lodash";
import { timeTable } from "../Selectors/timeGenerator";

export const applyCurrentSchedule = (
  schedule: string,
  table: typeof timeTable
) => {
  const parsed: string[] = JSON.parse(schedule);
  const newTable = { ...table };

  return parsed.reduce((acc, cur) => {
    acc[cur].isSelected = true;
    return acc;
  }, newTable);
};

export const refreshSchedule = (table: typeof timeTable) => {
  const newTable = { ...table };
  return _.chain(newTable)
    .entries()
    .map(([key, { isSelected }]) => [key, { isSelected: false }])
    .fromPairs()
    .value();
};
