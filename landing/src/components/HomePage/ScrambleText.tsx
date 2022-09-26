import React, { useEffect, useRef, useState } from "react";
import { TextScramble } from "../TextScramble";

interface IScrambleText {
  text: string;
  topOffset?: number;
}

const ScrambleText = ({ text, topOffset = 400 }: IScrambleText) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const elTop = elRef?.current?.getBoundingClientRect().y || 0;
      const scrollY = window.scrollY;

      if (elTop - topOffset <= scrollY) {
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", onScroll, true);
    return window.removeEventListener("scroll", onScroll);
  }, [topOffset]);

  return (
    <span ref={elRef}>
      {isScrolled ? (
        <TextScramble
          text={text}
          characters="#%>&-@*$~"
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
