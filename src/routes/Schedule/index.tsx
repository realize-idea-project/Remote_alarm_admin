import { useState, useEffect } from "react";
import _ from "lodash";
import dayjs, { Dayjs } from "dayjs";
import { styled } from "styled-components";
import { RootLayout } from "../../components/layouts";
import { useRealTimeDB } from "../../firebase/useRealTimeDB";

import { CustomCalendar } from "./CustomCalendar";
import { Selectors } from "./Selectors/Selectors";
import { timeTable } from "./Selectors/timeGenerator";
import { FloatingIcon } from "./FloatingIcon";
import { pickAlarmTime } from "./helpers/pickAlarmSchedule";
import {
  applyCurrentSchedule,
  refreshSchedule,
} from "./helpers/applyCurrentSchedule";

export const Schedule = () => {
  const { setData, getData } = useRealTimeDB();
  const [date, setDate] = useState<Dayjs>(dayjs(new Date()));
  const [selectedTime, setSelectedTime] = useState(timeTable);

  useEffect(() => {
    const today = date.date();
    getData(today).then((currentSchedule) => {
      if (!_.isNil(currentSchedule)) {
        const newTable = applyCurrentSchedule(currentSchedule, selectedTime);
        setSelectedTime(newTable);
      } else {
        const newTable = refreshSchedule(selectedTime);
        setSelectedTime(newTable);
      }
    });
  }, [date.date()]);

  const handleChange = (selectedDate: Dayjs | null) => {
    if (_.isNil(selectedDate)) return;
    setDate(selectedDate);
  };

  const handleToggle = (endTime: string) => {
    const newEntry = {
      isSelected: !selectedTime[endTime].isSelected,
    };

    setSelectedTime({ ...selectedTime, [endTime]: newEntry });
  };

  const applySchedule = async () => {
    const schedule = pickAlarmTime(selectedTime);
    const today = date.date();
    await setData(today, JSON.stringify(schedule));
    alert("알림 수정이 완료되었습니다.");
  };

  return (
    <RootLayout>
      <Container>
        <CustomCalendar currentDate={date} onChangeDate={handleChange} />
        <Selectors selectedTime={selectedTime} onChangeTime={handleToggle} />
        <FloatingIcon onClick={applySchedule} />
      </Container>
    </RootLayout>
  );
};

const Container = styled.div`
  overflow-y: scroll;
  padding-bottom: 50px;
  position: relative;
`;
