import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { CustomCalendar } from "./CustomCalendar";

export const Schedule = () => {
  return (
    <div>
      <CustomCalendar />
    </div>
  );
};
