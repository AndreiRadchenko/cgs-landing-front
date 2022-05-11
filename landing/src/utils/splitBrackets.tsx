import React from "react";

interface ISplitBracketsProps {
  text?: string;
}

export const SplitBrackets = ({ text }: ISplitBracketsProps) => {
  return (
    <>
      {text?.split("|").map((i, idx) => (
        <span key={idx}>
          {i}
          <br />
        </span>
      ))}
    </>
  );
};
