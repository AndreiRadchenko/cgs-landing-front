export const getPosition = (
  string: string,
  subString: string,
  index: number
) => {
  return string.split(subString, index).join(subString).length;
};
