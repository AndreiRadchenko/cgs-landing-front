import React from "react";

interface ISplitBracketsProps {
  text?: string;
  onMouseOut?: () => void;
  onMouseEnter?: (text: string) => void;
}

export const SplitBrackets = ({ text, onMouseOut, onMouseEnter }: ISplitBracketsProps) => {
  const splited = text?.split("|");

  return (
    <>
      {splited?.map(
        (el, idx) =>
          el !== "" && (
            <span key={idx} onMouseOut={onMouseOut} onMouseEnter={() => onMouseEnter?.(text as string)}>
              {el}
              {splited.length - 1 !== idx && <br />}
            </span>
          )
      )}
    </>
  );
};
