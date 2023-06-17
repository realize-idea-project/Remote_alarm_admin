import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Path } from "../constants";

import { Schedule } from "./Schedule";

const appRouter = createBrowserRouter([
  {
    path: Path.root,
    element: <Schedule />,
  },
]);

export default appRouter;
