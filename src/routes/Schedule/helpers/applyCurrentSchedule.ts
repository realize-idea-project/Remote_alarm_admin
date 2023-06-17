import _ from "lodash";
import { timeTable } from "../Selectors/timeGenerator";
import { getTimeInHHMM } from "../Selectors/timeUtils";

export const applyCurrentSchedule = (
  schedule: string,
  table: typeof timeTable
) => {
  const parsed: string[][] = JSON.parse(schedule);
  const newTable = { ...table };

  return _.chain(parsed)
    .flatten()
    .reduce((acc, cur) => {
      const time = getTimeInHHMM(new Date(cur));

      acc[time].isSelected = true;
      return acc;
    }, newTable)
    .value();
};

export const refreshSchedule = (table: typeof timeTable) => {
  const newTable = { ...table };
  return _.chain(newTable)
    .entries()
    .map(([key, { isSelected }]) => [key, { isSelected: false }])
    .fromPairs()
    .value();
};
