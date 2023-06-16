import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Path } from "../constants";
import Root from "./Root";
import { Schedule } from "./Schedule";

const appRouter = createBrowserRouter([
  {
    path: Path.root,
    element: <Root />,
    children: [
      {
        path: Path.schedule,
        element: <Schedule />,
      },
    ],
  },
]);

export default appRouter;
