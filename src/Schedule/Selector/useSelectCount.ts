import { useState } from "react";

export type SelectCount = "first" | "second";

const ITEM = 1;
const MAX_STACK = 2;

export const useSelectCount = () => {
  const [countStack, setCountStack] = useState<number[]>([]);

  const add = () => {
    if (countStack.length >= MAX_STACK) return;
    setCountStack((prev) => [...prev, ITEM]);
  };

  const pop = () => {
    if (countStack.length <= 0) return;
    const copy = [...countStack];
    copy.pop();
    setCountStack(copy);
  };

  const clear = () => {
    setCountStack([]);
  };

  const getCount = (currentStack: number[]): SelectCount => {
    if (currentStack.length === 0) return "first";
    return "second";
  };

  return {
    status: getCount(countStack),
    add,
    pop,
    clear,
  };
};
