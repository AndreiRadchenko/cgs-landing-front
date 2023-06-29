import { useMediaQuery } from "@mui/material";
import React from "react";

interface ISplitBracketsProps {
  text?: string;
  onMouseOut?: () => void;
  onMouseEnter?: (text: string, event: React.MouseEvent) => void;
}

export const SplitBrackets = ({
  text,
  onMouseOut,
  onMouseEnter,
}: ISplitBracketsProps) => {
  const is768px = useMediaQuery("(max-width:768px)");

  const splited = is768px ? text?.split("^") : text?.split("|");

  return (
    <section onMouseLeave={onMouseOut}>
      {splited?.map(
        (el, idx) =>
          el !== "" && (
            <span
              key={idx}
              onMouseEnter={(event) => onMouseEnter?.(text as string, event)}
            >
              {el.replace(/[\^|]/g, "")}
              {splited.length - 1 !== idx && <br />}
            </span>
          )
      )}
    </section>
  );
};
