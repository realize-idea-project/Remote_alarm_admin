import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Path } from "../constants";
import { RootLayout } from "../components/layouts";

const getPathname = () => {
  return Path.schedule;
};

export const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const path = getPathname();
    navigate(path);
  }, []);

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

export default Root;
