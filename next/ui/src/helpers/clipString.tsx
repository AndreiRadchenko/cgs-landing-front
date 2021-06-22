const clipString = (string: string | undefined) =>
  string && string.split(" ").length > 25
    ? [...string.split(" ").slice(0, 24), "..."].join(" ")
    : string;
export default clipString;
