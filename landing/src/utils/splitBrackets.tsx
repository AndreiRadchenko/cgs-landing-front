import React from "react";

interface ISplitBracketsProps {
  text?: string;
}

export const SplitBrackets = ({ text }: ISplitBracketsProps) => {
  const splited = text?.split("|");

  return (
    <>
      {splited?.map(
        (el, idx) =>
          el !== "" && (
            <span key={idx}>
              {el}
              {splited.length - 1 !== idx && <br />}
            </span>
          )
      )}
    </>
  );
};
