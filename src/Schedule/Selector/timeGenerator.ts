import _ from "lodash";
import { getTimeInYYMM } from "./timeUtils";

class CustomDate extends Date {
  getDisplayHour() {
    return getTimeInYYMM(this);
  }
}

export class TimeGenerator {
  private readonly interval = 30;

  private startTime: CustomDate;

  private endTime: CustomDate;

  private times: CustomDate[] = [];

  constructor(start: number, end: number) {
    this.startTime = new CustomDate();
    this.startTime.setHours(start, 0, 0);

    this.endTime = new CustomDate();
    this.endTime.setHours(end, 0, 0);
  }

  generate = () => {
    let currentTime = this.startTime;

    while (currentTime <= this.endTime) {
      this.times.push(_.cloneDeep(currentTime));
      currentTime.setMinutes(currentTime.getMinutes() + this.interval);
    }

    return this;
  };

  getList = () => {
    return this.times;
  };
}
