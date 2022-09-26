import React, { useEffect, useRef, useState } from "react";
import Scramble from "react-scramble";

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

  console.log(`${text}: ${isScrolled}`);

  return (
    <span ref={elRef}>
      {isScrolled ? (
        <Scramble
          autoStart
          text={text}
          speed="slow"
          steps={[
            {
              roll: 8,
              action: "+",
              type: "random",
            },
            {
              action: "-",
              type: "forward",
            },
          ]}
        />
      ) : (
        text
      )}
    </span>
  );
};

export default ScrambleText;
