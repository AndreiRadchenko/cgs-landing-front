import React from "react";

interface ISplitBracketsProps {
  text?: string;
}

export const SplitBrackets = ({ text }: ISplitBracketsProps) => {
  const splited = text?.split("|");
  let lastWord: string[] = [];

  if (splited?.length) {
    const lastPart = splited[splited?.length - 1].trim().split(" ");
    lastWord = lastPart.splice(lastPart.length - 1, 1);
    splited[splited?.length - 1] = lastPart.join(" ");
  }

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
      {lastWord && <span> {lastWord}</span>}
    </>
  );
};
