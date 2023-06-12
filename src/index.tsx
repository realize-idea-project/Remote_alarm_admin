import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Schedule } from "./Schedule/Schedule";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Schedule />
  </React.StrictMode>
);
