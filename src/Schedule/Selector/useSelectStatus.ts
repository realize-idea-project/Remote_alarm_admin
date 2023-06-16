import React, { useState } from "react";
import { SelectStatus } from "./types";

export const useSelectStatus = (mapping: Record<string, SelectStatus>) => {
  const [selectedTable, setSelectedTable] = useState(mapping);

  const isSelected = (key: string) => {
    return selectedTable[key].isSelected;
  };

  const select = (key: string) => {
    const changedStatus = {
      id: selectedTable[key].id,
      isSelected: true,
    };

    setSelectedTable({ ...selectedTable, [key]: changedStatus });
  };

  const unselect = (key: string) => {
    const changedStatus = {
      id: selectedTable[key].id,
      isSelected: false,
    };

    setSelectedTable({ ...selectedTable, [key]: changedStatus });
  };

  return {
    isSelected,
    select,
    unselect,
  };
};
