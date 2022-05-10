import React from "react";

export const splitBrackes = (text?: string) => {
  return text?.split("|").map((i) => (
    <>
      {i}
      <br />
    </>
  ));
};
