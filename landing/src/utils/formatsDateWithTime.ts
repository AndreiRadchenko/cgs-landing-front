export const formatsDateWithTime = (inputDate?: string): string => {
  const date = inputDate ? new Date(inputDate) : new Date();
  const month = date.getMonth() + 1;

  const modifyDateOrTime = (value: number): string =>
    value < 10 ? `0${value}` : `${value}`;

  return `${modifyDateOrTime(date.getDate())}.${modifyDateOrTime(
    month
  )}.${date.getFullYear()} ${modifyDateOrTime(
    date.getHours()
  )}:${modifyDateOrTime(date.getMinutes())}`;
};
