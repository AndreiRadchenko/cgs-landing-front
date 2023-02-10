import React from "react";

interface ISplitBracketsProps {
  text?: string;
  logo?: boolean;
}

export const SplitBrackets = ({ text, logo }: ISplitBracketsProps) => {
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
