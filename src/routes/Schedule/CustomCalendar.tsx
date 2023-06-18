import { FC } from "react";
import dayjs, { Dayjs } from "dayjs";
import _ from "lodash";

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

interface Props {
  currentDate: Dayjs | null;
  onChangeDate: (date: Dayjs | null) => void;
  open?: boolean;
}

export const CustomCalendar: FC<Props> = ({
  currentDate,
  onChangeDate,
  open,
}) => {
  if (_.isNil(currentDate)) return null;

  return (
    <div>
      <Accordion sx={{ marginTop: 1 }} expanded={open || undefined}>
        <AccordionSummary
          expandIcon={!open ? <ExpandMoreIcon /> : null}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderBottom: open ? "1px solid lightgray" : "none",
            cursor: open ? "none" : "pointer",
            "&.Mui-expanded": {
              // minHeight: 0,
            },
            "& .MuiAccordionSummary-content.Mui-expanded": {
              margin: "20px 0 12px 0",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: "1rem",
            }}
          >
            <EventNoteIcon />
            <div style={{ width: 5 }} />
            <Typography>{`${
              (currentDate.month() ?? 0) + 1
            }월 ${currentDate.date()}일`}</Typography>
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
                maxWidth: 700,
                paddingTop: "10px",
                paddingBottom: "12px",
                paddingX: 1,
                "@media (min-width: 768px)": {
                  width: "60vw",
                  maxWidth: 1000,
                },
                ".css-1cafy48-MuiPickersSlideTransition-root-MuiDayCalendar-slideTransition":
                  {
                    minHeight: 230,
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
              }}
              value={currentDate}
              onChange={onChangeDate}
              views={["day"]}
              fixedWeekNumber={5}
              showDaysOutsideCurrentMonth
              slots={{ day: Day }}
              slotProps={{
                day: {
                  selectedDay: currentDate,
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
        "&:not(.Mui-selected)": {
          border: "none",
        },
        "&.Mui-selected": {
          borderRadius: "100px",
        },
        "&.Mui-selected:hover": {
          borderRadius: "100px",
        },
      }}
      {...other}
    />
  );
};
