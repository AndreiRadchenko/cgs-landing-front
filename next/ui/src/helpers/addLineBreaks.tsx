import { Fragment } from "react";

export const addLineBreaks = (text: string): JSX.Element[] => (
  text.split('\n').map((text, index) => (
    <Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </Fragment>
  ))
);
