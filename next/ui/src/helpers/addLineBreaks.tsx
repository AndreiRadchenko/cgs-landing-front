import { Fragment } from "react";

export const addLineBreaks = (text: string): JSX.Element[] => {
  const lines = text.split('\n');
  return lines.map((text, index) => {
    const isLastLine = lines[index + 1] === undefined;
    return (
      <Fragment key={`${text}-${index}`}>
        {text}
        {!isLastLine && <br />}
      </Fragment>
    );
  });
};