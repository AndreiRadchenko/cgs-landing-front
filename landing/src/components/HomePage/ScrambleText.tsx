import React, { useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";
import { TextScramble } from "../TextScramble";

interface IScrambleText {
  text: string;
}

const ScrambleText = ({ text }: IScrambleText) => {
  const elRef = useRef<HTMLSpanElement>(null);
  const isOnScreen = useOnScreen(elRef, true);

  return (
    <span ref={elRef}>
      {isOnScreen ? (
        <TextScramble
          text={text}
          characters="!@#$%^&*()-="
          revealMode="typewriter"
          revealSpeed={100}
          revealText
        />
      ) : (
        text
      )}
    </span>
  );
};

export default ScrambleText;
