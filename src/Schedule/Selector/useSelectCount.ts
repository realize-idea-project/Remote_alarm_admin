export type SelectCount = "first" | "second";

const ITEM = 1;
const MAX_STACK = 2;

export const useSelectCount = () => {
  let stack: number[] = [];

  const add = () => {
    if (stack.length >= MAX_STACK) return;
    stack.push(ITEM);
  };

  const pop = () => {
    if (stack.length <= 0) return;
    stack.pop();
  };

  const clear = () => {
    stack = [];
  };

  const getCount = (currentStack: number[]): SelectCount => {
    if (currentStack.length === 0) return "first";
    return "second";
  };

  return {
    status: getCount(stack),
    add,
    pop,
    clear,
  };
};
