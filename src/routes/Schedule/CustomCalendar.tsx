import React from "react";
import dayjs, { Dayjs } from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EventNoteIcon from "@mui/icons-material/EventNote";

import "dayjs/locale/ko";

export const CustomCalendar = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

  const handleChange = (value: dayjs.Dayjs | null) => {
    setValue(value);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingBottom: 10 }}
    >
      <Accordion sx={{ width: "90vw" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            "&.Mui-expanded": {
              minHeight: 0,
            },
            ".css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
              margin: "12px 0",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <EventNoteIcon sx={{ fontSize: "1rem" }} />
            <div style={{ width: 5 }} />
            <Typography>{`${
              (value?.month() ?? 0) + 1
            }월 ${value?.date()}일`}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
          }}
        >
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={dayjs.locale("ko")}
          >
            <DateCalendar
              sx={{
                width: "90vw",
                paddingBottom: "12px",
                paddingX: 1,
                ".css-sm5cyk-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)":
                  {
                    border: "none",
                  },
                ".css-1cafy48-MuiPickersSlideTransition-root-MuiDayCalendar-slideTransition":
                  {
                    minHeight: 220,
                  },
                ".css-2jurxj-MuiDayCalendar-slideTransition": {
                  minHeight: 210,
                },
                ".css-nk89i7-MuiPickersCalendarHeader-root": {
                  marginTop: "8px",
                },
                ".css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel": {
                  width: "15vw",
                  maxHeight: "50px",
                },
                // ".css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel": {
                //   width: "15vw",
                //   maxHeight: "50px",
                // },
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Day = (
  props: PickersDayProps<Dayjs> & { selectedDay?: Dayjs | null }
) => {
  const { day, selectedDay, ...other } = props;

  const getColor = (day: dayjs.Dayjs) => {
    if (day.day() === 6) return "blue";
  };

  return (
    <PickersDay
      day={day}
      sx={{
        color: getColor(day),
        width: "15vw",
        maxHeight: "50px",
      }}
      {...other}
    />
  );
};
