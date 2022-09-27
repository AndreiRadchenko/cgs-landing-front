import React, { useEffect, useRef, useState } from "react";
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
          revealSpeed={150}
          revealText
        />
      ) : (
        text
      )}
    </span>
  );
};

export default ScrambleText;
