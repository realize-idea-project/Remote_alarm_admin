import _ from "lodash";
import { getTimeInYYMM } from "./timeUtils";
import { SelectStatus } from "./types";

class TimeGenerator {
  private readonly interval = 30;

  private startTime: Date;

  private endTime: Date;

  private times: Date[] = [];

  constructor(start: number, end: number) {
    this.startTime = new Date();
    this.startTime.setHours(start, 0, 0);

    this.endTime = new Date();
    this.endTime.setHours(end, 0, 0);
  }

  generate() {
    let currentTime = this.startTime;

    while (currentTime <= this.endTime) {
      const currentDate = _.cloneDeep(currentTime);
      this.times.push(currentDate);
      currentTime.setMinutes(currentTime.getMinutes() + this.interval);
    }

    return this;
  }

  getList() {
    return this.times;
  }

  getTable() {
    if (_.isEmpty(this.times)) return {};

    const table = this.times.reduce((acc, cur) => {
      const id = getTimeInYYMM(cur);
      acc[id] = { isSelected: false };

      return acc;
    }, {} as Record<string, SelectStatus>);

    return table;
  }
}

const generator = new TimeGenerator(9, 22).generate();

export const TIME_LIST = generator.getList();
export const timeTable = generator.getTable();

export const RANGE_LIST = _.chain(TIME_LIST)
  .map((t, idx) => {
    const start = t;
    const end = TIME_LIST[idx + 1];
    return end ? [start, end] : undefined;
  })
  .compact()
  .value();
