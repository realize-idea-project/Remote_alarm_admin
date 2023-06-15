export const getDateWithoutUnit = (locale: string | undefined, date: Date) => {
  return date.getDate().toString();
};

export const getTitleDate = (date: Date) => {
  const [month, day, year] = date.toLocaleDateString().split("/");
  return `${year}년 ${month}월`;
};

export const getDateOnChangedMonth = (date: Date, type: "next" | "prev") => {
  const currentDate = new Date(date);
  const offset = type === "next" ? 1 : -1;
  currentDate.setMonth(currentDate.getMonth() + offset);

  return currentDate;
};
