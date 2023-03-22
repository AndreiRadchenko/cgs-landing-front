export const formatsPublishedDate = (): string => {
  const date = new Date();
  const month = date.getMonth() + 1;

  return ` ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}.${
    month < 10 ? `0${month}` : month
  }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};
