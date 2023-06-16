import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Day } from "./Day";
import "dayjs/locale/ko";

export const Schedule = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

  const handleChange = (value: dayjs.Dayjs | null) => {
    setValue(value);
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={dayjs.locale("ko")}
    >
      <DateCalendar
        sx={{
          "&.MuiDateCalendar-root": {
            width: "100vw",
            maxWidth: 300,
            paddingX: 1,
          },
          ".css-1jsy6pn-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)":
            {
              border: "none",
            },
        }}
        value={value}
        onChange={handleChange}
        views={["day"]}
        fixedWeekNumber={5}
        showDaysOutsideCurrentMonth
        slots={{ day: Day }}
        slotProps={{
          day: {
            selectedDay: value,
          } as any,
        }}
      />
    </LocalizationProvider>
  );
};
